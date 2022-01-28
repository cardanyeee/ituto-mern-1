const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Subject = mongoose.model('Subject', SubjectSchema);

module.exports = Subject;
