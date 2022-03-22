const Assessment = require('../models/Assessment');
const Session = require('../models/Session');

const ErrorResponse = require('../utils/errorResponse');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');


exports.create = catchAsyncErrors(async (req, res, next) => {
    try {
        const { sessionID, name, questions, subject, tutee } = req.body;

        const tutor = req.user._id;
        const session = await Session.findOne({ _id: sessionID });

        if (!(tutor.equals(session.tutor))) {
            next(new ErrorResponse('Unauthorized Access', 401));
        }
        
        const questionArray = JSON.parse(questions);

        let assessment = new Assessment({
            name,
            subject,
            tutee,
            tutor,
            questions: questionArray.map(ques => {
                return {
                    ...ques,
                    choices: JSON.parse(ques.choices).map(choice => {
                        return {
                            choice
                        }
                    })
                }
            })
        });


        session.assessments.push(assessment._id);

        await session.save({ validateBeforeSave: false });

        await assessment.save();

        console.log(session);

        res.status(200).json({
            success: true,
            assessment,
            message: "Assessment Successfully Created!"
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});



exports.findTutorAssessments = catchAsyncErrors(async (req, res, next) => {
    try {

        Assessment.find({ tutor: req.user._id })
            .then(result => {
                res.status(200).json(result);
            })
    } catch (error) {
        next(new ErrorResponse('Quiz not found', 404));
    }
});

exports.findTuteeAssessments = catchAsyncErrors(async (req, res, next) => {
    try {

        Assessment.find({ tutee: req.user._id })
            .then(result => {
                res.status(200).json(result);
            })
    } catch (error) {
        next(new ErrorResponse('Quiz not found', 404));
    }
});

exports.allExam = catchAsyncErrors(async (req, res, next) => {
    try {

        Assessment.find()
            .then(result => {
                res.status(200).json(result);
            })
    } catch (error) {
        next(new ErrorResponse('Quiz not found', 404));
    }
});

exports.selectedExam = catchAsyncErrors(async (req, res, next) => {
    try {

        Assessment.findOne({ _id: req.user._id }).then(assessment => {
            res.status(200).json({
                success: true,
                assessment
            });
        }).catch(er => {
            res.status(500).send(er);
        })
    } catch (error) {
        next(new ErrorResponse('Quiz not found', 404));
    }
});




