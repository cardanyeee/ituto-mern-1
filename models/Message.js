const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    conversationID: {
        type: mongoose.Schema.ObjectId,
        ref: 'Conversation',
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
