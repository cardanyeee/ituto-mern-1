const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    tutee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject"
    },
    description: {
        type: String,
        required: [true, "Please enter a description"]
    },
    requestDate: {
        type: Date,
        required: true
    },
    acceptDate: {
        type: Date
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    status: {
        type: String,
        enum: {
            values: [
                "Request",
                "Ongoing",
                "Done"
            ]
        },
        default: "Request"
    },
    assessments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assessment"
    }]
}, {
    timestamps: true
});

const Session = mongoose.model('Session', SessionSchema);

module.exports = Session;
