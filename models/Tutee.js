const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const TuteeSchema = new Schema({

}, {
    timestamps: true
});

const Tutee = mongoose.model('Tutee', TuteeSchema);

module.exports = Tutee;
