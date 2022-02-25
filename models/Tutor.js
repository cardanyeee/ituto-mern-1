const mongoose = require('mongoose');
const validator = require('validator');
const User = require('../models/User')

const Schema = mongoose.Schema;

const TutorSchema = new Schema({
    userID: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    subjects: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Subject'
        }
    ],
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            tutee: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    availability: [
        {
            day: {
                type: String,
                required: true
            },
            startTime: {
                type: String,
                required: true
            },
            endTime: {
                type: String,
                required: true
            }
        }
    ]
}, {
    timestamps: true
});

const Tutor = mongoose.model('Tutor', TutorSchema);

module.exports = Tutor;
