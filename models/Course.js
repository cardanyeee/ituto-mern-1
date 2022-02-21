const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
