const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const AssessmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    questions: [{
        type: Object,
        contains: {
            choices: { type: Array },
            answer: String,
            question: String
        }
    }],
    answers: {
        type: Array,
        required: true
    },
    subject:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject"
    },
    tutor: {
        type: Schema.Types.ObjectID,
        ref: "Tutor",
        required: true
    },
    tutee: {
        type: Schema.Types.ObjectID,
        ref: "User",
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true


}

);

const Assessment = mongoose.model('Assessment', AssessmentSchema);

module.exports = Assessment;
