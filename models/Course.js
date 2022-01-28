const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
