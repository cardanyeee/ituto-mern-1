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

