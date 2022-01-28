const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
    members: {
        type: Array,
        required: true
    }
}, {
    timestamps: true
});

const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;
