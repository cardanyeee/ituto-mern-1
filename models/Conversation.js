const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
    conversationName: { type: String, trim: true },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
    }
}, {
    timestamps: true
});

const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;
