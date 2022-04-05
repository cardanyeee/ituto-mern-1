const Tutor = require('../models/Tutor');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');
const activateEmail = require('../utils/activateEmail');

const jwt = require('jsonwebtoken');


///FOR ANALYTICSSSSSSS////////////////////////////////
exports.reportsTopTutors = catchAsyncErrors(async (req, res, next) => {
    try {
        const tutor = await Tutor.find()
            .sort({ ratings: -1 })
            .limit(10)
            .select("-availability -subjects -reviews -__v")
            .populate("userID", "-isTutor -active -role -__v");

        res.status(200).json({
            success: true,
            tutor
        })

    } catch (error) {
        next(error);
    }

});


exports.reportsTuteeYearLevel = catchAsyncErrors(async (req, res, next) => {
    try {

        const users = await User.aggregate([
            {
                $match:
                {
                    'isTutor': false
                }
            },
            {
                $group: {
                    _id: "$yearLevel",
                    count: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json({
            success: true,
            users
        })

    } catch (error) {
        next(error);
    }

});








exports.index = catchAsyncErrors(async (req, res, next) => {
    try {


        const usersQuery = new APIFeatures(User.find({ "isTutor": true, _id: { $nin: [req.user._id] } }), req.query)
            .search();

        const users = await usersQuery.query;

        const userIDArray = users.map(user => user._id);

        const tutorsQuery = new APIFeatures(Tutor.find({ "userID": { $in: userIDArray } }).populate("userID").populate("subjects"), req.query)
            .filter()
            .filterByDay();

        const tutors = await tutorsQuery.query;

        res.status(200).json({
            success: true,
            tutors
        });
    } catch (error) {
        next(error);
    }
});

exports.signUpTutor = catchAsyncErrors(async (req, res, next) => {

    console.log(req.body);

    const { firstname, lastname, birthdate, gender, course, yearLevel, email, password, availability, subjectID } = req.body;

    try {

        newTutor = {
            availability,
            subjectID,
            user: {
                firstname,
                lastname,
                birthdate,
                gender,
                course,
                yearLevel,
                email,
                password
            }
        }

        const activation_token = createActivationToken(newTutor);

        const url = `https://mern-ituto.herokuapp.com/tutor/activate/${activation_token}`;
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

exports.activateTutor = catchAsyncErrors(async (req, res, next) => {

    try {

        const { activation_token } = req.body;

        const newTutor = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET);

        console.log(newTutor);

        const {
            firstname,
            lastname,
            birthdate,
            gender,
            course,
            yearLevel,
            email,
            password
        } = newTutor.user;

        const user = await User.create({
            firstname,
            lastname,
            username: email.split("@")[0],
            birthdate,
            gender,
            course,
            yearLevel,
            email,
            password,
            isTutor: true
        });


        const tutor = await Tutor.create({
            userID: user._id,
            availability: JSON.parse(newTutor.availability)
        });

        subjects = JSON.parse(newTutor.subjectID);

        subjects.forEach(subject => {
            if (tutor.subjects.includes(subject)) {
                console.log("hi");
            } else {
                tutor.subjects.push(subject);
            }
        });

        console.log(tutor);

        await tutor.save({ validateBeforeSave: false });

        res.status(200).json({
            success: true,
            tutor
        });
    } catch (error) {
        console.log(error.name);
        next(error);
    }
});

exports.getCurrentTutor = catchAsyncErrors(async (req, res, next) => {
    try {
        const tutor = await Tutor.findOne({ userID: req.user._id })
            .populate({
                path: 'userID',
                populate: {
                    path: 'course'
                }
            })
            .populate("subjects");

        console.log(tutor);

        res.status(200).json({
            success: true,
            tutor
        })
    } catch (error) {
        next(new ErrorResponse('Tutor not found', 404));
    }
});

exports.addSubject = catchAsyncErrors(async (req, res, next) => {
    try {
        subjects = JSON.parse(req.body.subjectID);

        const tutor = await Tutor.findOne({ userID: req.user._id });

        subjects.forEach(subject => {
            if (tutor.subjects.includes(subject)) {
                console.log("hi");
            } else {
                tutor.subjects.push(subject);
            }
        });

        console.log(tutor.subjects);

        await tutor.save({ validateBeforeSave: false });

        res.status(200).json({
            success: true,
            tutor
        });
    } catch (error) {
        next(error);
    }
});

exports.getTutorReviews = catchAsyncErrors(async (req, res, next) => {

    try {

        const tutor = await Tutor.findOne({ _id: req.params.id })
            .populate("reviews.tutee", " -birthdate -isTutor -role -phone -createdAt -updatedAt")
            .populate("reviews.subject");

        if (!tutor) {
            return next(new ErrorResponse("Tutor not found.", 404));
        }

        res.status(200).json({
            success: true,
            reviews: tutor.reviews
        })
    } catch (error) {
        next(error);
    }

});

exports.findTutor = catchAsyncErrors(async (req, res, next) => {
    try {
        const tutor = await Tutor.findById(req.params.id)
            .populate({
                path: 'userID',
                populate: {
                    path: 'course'
                }
            })
            .populate('subjects');

        res.status(200).json({
            success: true,
            tutor
        });
    } catch (error) {
        next(new ErrorResponse('Tutor not found', 404));
    }
});

exports.updateAvailability = catchAsyncErrors(async (req, res, next) => {

    try {

        const tutor = await Tutor.findOne({ userID: req.user._id });

        tutor.availability = JSON.parse(req.body.availability);

        tutor.save();

        res.status(200).json({
            success: true,
            message: "Availability successfully changed!"
        });
    } catch (error) {
        console.log(error);
        next(err);
    }

});

exports.updateSubjects = catchAsyncErrors(async (req, res, next) => {

    try {
        const tutor = await Tutor.findOne({ userID: req.user._id });

        tutor.subjects = JSON.parse(req.body.subjects);

        tutor.save();

        res.status(200).json({
            success: true,
            message: "Subjects successfully changed!"
        });
    } catch (error) {
        console.log(error);
        next(err);
    }

});

exports.updateAboutMe = catchAsyncErrors(async (req, res, next) => {

    try {
        const tutor = await Tutor.findOne({ userID: req.user._id });

        tutor.aboutMe = req.body.aboutMe;

        tutor.save();

        res.status(200).json({
            success: true,
            message: "Subjects successfully changed!"
        });
    } catch (error) {
        console.log(error);
        next(err);
    }

});

const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: '1h' })
}