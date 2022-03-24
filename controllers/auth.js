const User = require('../models/User');
const Tutor = require('../models/Tutor');
const Sub = require('../models/Subject');
const ErrorResponse = require("../utils/errorResponse");
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const forgotPasswordEmail = require('../utils/forgotPasswordEmail');
const activateEmail = require('../utils/activateEmail');
const { uploadFile, deleteFile, getFileStream, download } = require('../utils/s3');

const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary');
const { OAuth2Client } = require('google-auth-library');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);
const client = new OAuth2Client(process.env.MAILING_SERVICE_CLIENT_ID);

//dashboard

exports.dashboard = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();
    const tutors = await Tutor.find();
    const subs = await Sub.find();
    var male = 0;
    var female = 0;

    var other = 0;
    var pnts = 0;


    users.forEach(value => {
        if (value.gender == "Male") {
            male = male + 1;
        } else if (value.gender == "Female") {
            female = female + 1;
        } else if (value.gender == "Others") {
            other = other + 1;
        } else {
            pnts = pnts + 1;
        }
    })

    res.status(200).json({
        success: true,
        male, female, other, pnts,
        users,
        tutors,
        subs
    })
});

//Register User
exports.register = catchAsyncErrors(async (req, res, next) => {
    console.log("Registering");

    console.log(req.body);

    const { firstname, lastname, birthdate, gender, course, yearLevel, email, password } = req.body;

    try {

        const newUser = {
            firstname,
            lastname,
            birthdate,
            gender,
            course,
            yearLevel,
            email,
            password
        }

        const activation_token = createActivationToken(newUser);

        const url = `https://mern-ituto.herokuapp.com/user/activate/${activation_token}`;
        activateEmail(email, url, "Verify your email address");

        res.status(200).json({
            success: true,
            msg: "Register Success! Please check your email to activate your account"
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
});

exports.activate = catchAsyncErrors(async (req, res, next) => {
    try {

        const { activation_token } = req.body;
        console.log(activation_token);

        const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET);
        
        console.log(user);
        const {
            firstname,
            lastname,
            birthdate,
            gender,
            course,
            yearLevel,
            email,
            password
        } = user;

        const newUser = await User.create({
            firstname,
            lastname,
            username: email.split("@")[0],
            birthdate,
            gender,
            course,
            yearLevel,
            email,
            password
        });

        res.json({ msg: "Account has been activated!" });

    } catch (err) {
        console.log(err);
        next(err);
    }
});

//Login User
exports.login = catchAsyncErrors(async (req, res, next) => {
    console.log("login");
    const { email, password, loggedInAs } = req.body;

    if (!email || !password) {
        return next(new ErrorResponse("Please enter a valid email and password", 400));
    }

    try {
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return next(new ErrorResponse("You don't have an account yet", 404));
        }

        const tutor = await Tutor.findOne({ userID: user._id });

        if (loggedInAs == "TUTOR" && !tutor) {
            return next(new ErrorResponse("You don't have a tutor account", 404));
        }

        const isMatch = await user.matchPasswords(password);

        if (!isMatch) {
            return next(new ErrorResponse("Wrong email or password", 401));
        }

        sendToken(user, 200, res);

    } catch (error) {
        next(error);
    }
});

//Google Log in User User
exports.googleLogin = catchAsyncErrors(async (req, res, next) => {
    try {
        const { tokenId, birthdate, gender, course } = req.body;

        const response = await client.verifyIdToken({ idToken: tokenId, requiredAudience: "924372861452-4fl88545df8le5tu7e6f1tlgclt2cp78.apps.googleusercontent.com" });
        const { given_name, family_name, email_verified, name, email, picture } = response.payload;
        // console.log(response);
        if (email_verified) {

            try {
                const user = await User.findOne({ email });

                if (user) {
                    sendToken(user, 200, res);
                } else {

                    try {
                        const firstname = given_name;
                        const lastname = family_name;
                        const username = name;
                        const password = email + process.env.JWT_SECRET;
                        const newUser = await User.create({
                            firstname,
                            lastname,
                            birthdate,
                            gender,
                            course,
                            username,
                            email,
                            password,
                            avatar: {
                                public_id: username,
                                url: picture
                            }
                        });

                        console.log(newUser);

                        sendToken(newUser, 200, res);
                    } catch (error) {
                        next(error);
                    }
                }
            } catch (error) {
                return next(new ErrorResponse("Something went wrong", 400));
            }

        }
    } catch (error) {
        console.log(error);
    }
});

exports.forgotpassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorResponse("User not found with this email.", 404));
    }

    try {

        const resetToken = user.getResetPasswordToken();

        await user.save({ validateBeforeSave: false });

        const url = `http://mern-ituto.herokuapp.com/reset/password/${resetToken}`

        forgotPasswordEmail(req.body.email, url, "Reset your password")

        res.status(200).json({
            success: true,
            message: `Email has been sent successfully to ${user.email}`
        });
    } catch (err) {
        console.log(err);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorResponse(error.message, 500));
    }
});

exports.resetpassword = catchAsyncErrors(async (req, res, next) => {

    console.log(req.header("Authorization"));

    const resetPasswordToken = crypto.createHash('sha256').update(req.header("Authorization")).digest('hex');

    try {
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        });



        if (!user) {
            return next(new ErrorResponse("Your reset password token is invalid or has expired.", 400));
        }
        console.log(req.body.cf_password);
        if (req.body.password !== req.body.cf_password) {
            return next(new ErrorResponse("Password do not match.", 400));
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Password successfully changed!"
        });

    } catch (err) {
        next(err);
    }

});

exports.getCurrentUser = catchAsyncErrors(async (req, res, next) => {
    try {
        console.log('Getting');

        const user = await User.findById(req.user._id)
            .populate("course");

        // console.log(user);

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        next(error);
    }
});

exports.updateProfile = catchAsyncErrors(async (req, res, next) => {

    try {

        const user = await User.findById(req.user._id);

        if (req.files.length > 0) {
            const file = req.files[0];
            // apply filter
            // resize 
            deleteFile(user.avatar.public_id);

            const result = await uploadFile(file, "profile/");

            user.avatar.public_id = result.key;
            user.avatar.url = `https://mern-ituto.herokuapp.com/api/${result.key}`;

            console.log(result);
            await unlinkFile(file.path);
        }

            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.username = req.body.username;
            user.birthdate = req.body.birthdate;
            user.gender = req.body.gender;
            user.course = req.body.course;
            user.phone = req.body.phone;

        user.save();

        res.status(200).json({
            success: true,
            message: "Account successfully changed!"
        });
    } catch (error) {
        console.log(error);
        next(err);
    }

});

exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');

    const isMatched = await user.matchPasswords(req.body.oldPassword);
    if (!isMatched) {
        return next(new ErrorResponse('Old password is incorrect', 400));
    }

    user.password = req.body.password;
    await user.save();

    sendToken(user, 200, res)

});

exports.logout = catchAsyncErrors(async (req, res, next) => {
    console.log('logout');
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        message: 'Logged Out'
    });
});

exports.getProfile = catchAsyncErrors(async (req, res, next) => {
    try {
        console.log(req.params)
        const key = req.params.key
        const readStream = await getFileStream("profile/", key, next);
        readStream.pipe(res)
    } catch (error) {
        next(new ErrorResponse('File not found', 404));
    }
});

// Admin Routes

// Get all users   =>   /api/v1/admin/users
exports.allUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
});


// Get user details   =>   /api/v1/admin/user/:id
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`User not found with id: ${req.params.id}`));
    }

    res.status(200).json({
        success: true,
        user
    })
});


exports.findUser = catchAsyncErrors(async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        next(new ErrorResponse('User not found', 404));
    }
});


// Update user profile   =>   /api/v1/admin/user/:id
exports.updateUser = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
       

       firstname : req.body.firstname,
       lastname : req.body.lastname,
       username : req.body.username,
       birthdate : req.body.birthdate,
       gender : req.body.gender,
       role : req.body.role,
       phone : req.body.phone
    }

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
});

// Delete user   =>   /api/v1/admin/user/:id

// exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
//     const user = await User.findById(req.params.id);

//     if (!user) {
//         return next(new ErrorHandler(`User does not found with id: ${req.params.id}`))
//     }

//     // Remove avatar from cloudinary
//     const image_id = user.avatar.public_id;
//     await cloudinary.v2.uploader.destroy(image_id);

//     await user.remove();

//     res.status(200).json({
//         success: true,
//     })
// });

const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: '1h' })
}