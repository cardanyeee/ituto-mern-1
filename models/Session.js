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
        ref: "Tutor"
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject"
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
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
