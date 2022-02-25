const Tutor = require('../models/Tutor');
const User = require('../models/User');

const ErrorResponse = require('../utils/errorResponse');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');

exports.index = catchAsyncErrors(async (req, res, next) => {
    try {

        const apiFeatures = new APIFeatures(User.find({"isTutor":"true"}), req.query)
            .search();

        const tutors = await apiFeatures.query;

        const filteredMoviesCount = tutors.length;

        res.status(200).json({
            success: true,
            filteredMoviesCount,
            tutors
        });
    } catch (error) {
        next(error);
    }
});

exports.signUpTutor = catchAsyncErrors(async (req, res, next) => {

    try {

        const tutor = await Tutor.find({ userID: req.user._id });
        const user = await User.findById(req.user._id);

        const { availability } = req.body;

        if (!tutor) {
            return next(new ErrorResponse("User already has a tutor account", 409));
        }

        if (!user) {
            return next(new ErrorResponse("User does not exist", 404));
        }

        user.isTutor = true;
        console.log(JSON.parse(req.body.availability));
        const newTutor = await Tutor.create({
            userID: req.user.id,
            availability: JSON.parse(req.body.availability) 
        });

        console.log(newTutor);

        await user.save();

        res.status(200).json({
            success: true,
            newTutor
        });
    } catch (error) {
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
        const tutor = await Tutor.findOne({ userID: req.user._id });
        console.log(req.body.subjectID);
        if (!tutor) {
            return next(new ErrorResponse("Tutor account does not exist", 404));
        }

        if (!req.body.subjectID) {
            return next(new ErrorResponse("Please input a valid subject", 404));
        }

        tutor.subjects.push(req.body.subjectID);

        await tutor.save({ validateBeforeSave: false });

        res.status(200).json({
            success: true,
            tutor
        });
    } catch (error) {
        next(error);
    }
});

