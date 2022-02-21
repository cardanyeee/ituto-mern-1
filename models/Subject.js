const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    code: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    course: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ],
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const Subject = mongoose.model('Subject', SubjectSchema);

module.exports = Subject;
