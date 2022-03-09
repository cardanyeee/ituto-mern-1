const Session = require('../models/Session');

const ErrorResponse = require('../utils/errorResponse');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');


exports.createSession = catchAsyncErrors(async (req, res, next) => {
    try {

        const { tutee, tutor, subject, description, startDate, endDate } = req.body;

        console.log(req.body)

        let createSession = new Session({
            tutor,
            tutee,
            subject,
            description,
            startDate,
            endDate
        });
        createSession.save().then(result => {
            res.status(200).json({ success: true });
        })
    } catch (error) {
        next(error);
    }
});

exports.findTutorSession = catchAsyncErrors(async (req, res, next) => {
    try {
        const sessions = await Session.find({ tutor: req.user._id })
            .populate("tutee")
            .populate("subject");

        res.status(200).json({
            success: true,
            sessions
        })
    } catch (error) {
        next(new ErrorResponse('Session does not exist', 404));
    }
});

exports.findTuteeSession = catchAsyncErrors(async (req, res, next) => {
    try {
        const sessions = await Session.find({ tutee: req.user._id })
            .populate("tutor")
            .populate("subject");

        res.status(200).json({
            success: true,
            sessions
        })
    } catch (error) {
        next(new ErrorResponse('Quiz not found', 404));
    }
});

exports.allSession = catchAsyncErrors(async (req, res, next) => {
    try {

        Session.find()
            .then(result => {
                res.status(200).json(result);
            })
    } catch (error) {
        next(new ErrorResponse('Session not found', 404));
    }
});

exports.selectedSession = catchAsyncErrors(async (req, res, next) => {
    try {

        Session.findOne({ _id: req.params.id }).then(session => {
            res.status(200).json({
                success: true,
                session
            });
        }).catch(er => {
            res.status(500).send(er);
        })
    } catch (error) {
        next(new ErrorResponse('Session not found', 404));
    }
});