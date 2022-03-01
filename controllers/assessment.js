const Assessment = require('../models/Assessment');

const ErrorResponse = require('../utils/errorResponse');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');


exports.create = catchAsyncErrors(async (req, res, next) => {
    try {

        const { name, questions, subject, tutor, tutee } = req.body;

        console.log(name)

        let quiz = new Assessment({
            name,
            subject,
            tutor,
            tutee,
            questions: questions.map(ques => {
                return {
                    ...ques,
                    choices: ques.choices.map(choice => {
                        return {
                            name: choice,
                            selected: false
                        }
                    })
                }
            })
        });
        quiz.save().then(result => {
            res.status(200).json({ success: true });
        })
    } catch (error) {
        next(error);
    }
});



exports.find = catchAsyncErrors(async (req, res, next) => {
    try {

        Assessment.find({ createdBy: req.params.id })
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

        Assessment.findOne({ _id: req.params.id }).then(quiz => {
            res.status(200).json({quiz});
        }).catch(er => {
            res.status(500).send(er);
        })
    } catch (error) {
        next(new ErrorResponse('Quiz not found', 404));
    }
});




