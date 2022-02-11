const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const TutorSchema = new Schema({
    userID: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    subjects: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Subject'
        }
    ],
    availability: {
        type: String,
        required: [true, "Please enter a valid firstname"]
    }
}, {
    timestamps: true
});

const Tutor = mongoose.model('Tutor', TutorSchema);

module.exports = Tutor;
