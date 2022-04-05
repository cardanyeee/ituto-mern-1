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
            return next(new ErrorResponse('Unauthorized Access', 401));
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

        assessment = await assessment.populate("subject");
        assessment = await assessment.populate("tutor");

        // console.log(assessment);

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

exports.answerAssessment = catchAsyncErrors(async (req, res, next) => {
    try {

        const tutee = req.user._id;
        const assessment = await Assessment.findOne({ _id: req.params.id });
        const questions = assessment.questions;
        const answers = JSON.parse(req.body.answers);
        var score = 0;

        if (assessment.answerDate) {
            return next(new ErrorResponse('Assessment already answered', 401));
        }

        if (!(tutee.equals(assessment.tutee))) {
            return next(new ErrorResponse('Unauthorized Access', 401));
        }

        const convertedAnswer = answers.map(answer => {
            if (answer == "A") {
                return 0;
            }

            if (answer == "B") {
                return 1;
            }

            if (answer == "C") {
                return 2;
            }

            if (answer == "D") {
                return 3;
            }
        })

        questions.map((question, i) => {
            console.log(question.choices[convertedAnswer[i]].choice, question.answer);
            if (question.choices[convertedAnswer[i]].choice == question.answer) {
                score++;
            }
        })

        assessment.score = score;
        assessment.answerDate = convertUTCDateToLocalDate(Date.now());
        assessment.answers = convertedAnswer;

        // console.log(JSON.parse(req.body.answers));
        // console.log(req.params.id);
        // console.log(tutee);
        // console.log(assessment);
        // console.log(score);
        // const { sessionID, name, questions, subject, tutee } = req.body;

        await assessment.save();

        console.log(assessment);

        res.status(200).json({
            success: true,
            score,
            totalItems: questions.length,
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

        const assessment = await Assessment.findOne({ _id: req.params.id })
            .populate("subject")
            .populate("tutor")
            .populate("tutee");


        res.status(200).json({
            success: true,
            assessment
        });

    } catch (error) {
        next(new ErrorResponse('Quiz not found', 404));
    }
});

function convertUTCDateToLocalDate(date) {

    date = new Date(date);

    var localOffset = date.getTimezoneOffset() * 60000;

    var localTime = date.getTime();

    date = localTime - localOffset;

    //date = new Date(date);

    return date;

};




