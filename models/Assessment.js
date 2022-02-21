const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const AssessmentSchema = new Schema({
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tutor"
    },
    tutee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    questions: [{
        question: {
            type: String,
            required: true
        },
        questionType: {
            type: String,
            required: [true, 'Please select question type'],
            enum: {
                values: [
                    "Multiple Choice",
                    "Enumeration",
                    "Paragraph"
                ],
                message: 'Please select question type'
            }
        },
        validAnswers: [{
            answer: {
                type: String,
                required: true
            }
        }],
        tuteeAnswer: {
            type: String
        }
    }],
    score: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const Assessment = mongoose.model('Assessment', AssessmentSchema);

module.exports = Assessment;
