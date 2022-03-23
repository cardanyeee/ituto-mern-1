const Tutor = require('../models/Tutor');
const User = require('../models/User');

const ErrorResponse = require('../utils/errorResponse');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');
const activateEmail = require('../utils/activateEmail');

const jwt = require('jsonwebtoken');

exports.index = catchAsyncErrors(async (req, res, next) => {
    try {


        const usersQuery = new APIFeatures(User.find({ "isTutor": true }), req.query)
            .search();

        const users = await usersQuery.query;

        const userIDArray = users.map(user => user._id);

        const tutorsQuery = new APIFeatures(Tutor.find({ "userID": { $in: userIDArray } }).populate("userID").populate("subjects"), req.query)
            .filter()
            .filterByDay();

        const tutors = await tutorsQuery.query;

        // search before filter
        // const tutorsQuery = new APIFeatures(Tutor.find(), req.query)
        //     .filter();

        // const tutors = await tutorsQuery.query;

        // const tutorIDArray = tutors.map(tutor => tutor.userID);

        // const usersQuery = new APIFeatures(User.find({ "_id" : { $in: tutorIDArray } }), req.query)
        //     .search();

        // const users = await usersQuery.query;

        // var tutorInfo = [];

        // users.map(user => {
        //     tutors.map(tutor =>{
        //         if (user._id.toString() === tutor.userID.toString()) {
        //             user.tutorAccount = tutor;
        //             tutorInfo.push(user);
        //         }
        //     });
        // });

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

    console.log(req.body);

    try {

        const { activation_token } = req.body;
        console.log(activation_token);

        const newTutor = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET);
        console.log(JSON.parse(newTutor.availability));
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
        console.log(error);
        next(error);
    }
});

exports.getCurrentTutor = catchAsyncErrors(async (req, res, next) => {
    console.log('Getting');

    const tutor = await Tutor.findOne({ userID: req.user._id }).populate("subjects");

    // console.log(user);

    res.status(200).json({
        success: true,
        tutor
    })

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

const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: '10m' })
}