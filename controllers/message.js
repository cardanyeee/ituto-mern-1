const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Message = require("../models/Message");
const User = require("../models/User");
const Conversation = require("../models/Conversation");

//@description     Get all Messages
//@route           GET /api/Message/:chatId
//@access          Protected
const allMessages = catchAsyncErrors(async (req, res) => {

    console.log("Messages");
    try {

        const messages = await Message.find({ conversationID: req.params.conversationID })
            .populate("sender", "firstname avatar")
            .populate("conversationID");
        res.json({
            success: true,
            messages
        });
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

//@description     Create New Message
//@route           POST /api/Message/
//@access          Protected
const sendMessage = catchAsyncErrors(async (req, res) => {
    const { content, conversationID } = req.body;
    
    if (!content || !conversationID) {
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
    }
    
    var newMessage = {
        sender: req.user._id,
        content: content,
        conversationID: conversationID,
    };

    try {
        var message = await Message.create(newMessage);

        message = await message.populate("sender", "firstname avatar");
        message = await message.populate("conversationID");
        message = await User.populate(message, {
            path: "users",
            select: "firstname",
        });

        await Conversation.findByIdAndUpdate(req.body.conversationID, { latestMessage: message });

        res.json({
            success: true,
            message
        });
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

module.exports = { allMessages, sendMessage };