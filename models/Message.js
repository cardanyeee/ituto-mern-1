const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    content: {
        type: String,
        trim: true
    },
    conversationID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation"
    },
    readBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
