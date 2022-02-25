const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Message = require("../models/Message");
const User = require("../models/User");
const Conversation = require("../models/Conversation");

const multer = require('multer');
const util = require('util');
const fs = require('fs');
const unlinkFile = util.promisify(fs.unlink);
const upload = multer({ dest: 'uploads/' });

const { uploadFile, getFileStream } = require('../utils/s3')

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

const sendFile = catchAsyncErrors(async (req, res) => {
    console.log(req);
    try {

        const file = req.files[0]
        // apply filter
        // resize 
        
        const result = await uploadFile(file)


        const description = req.body.description
        res.send({ imagePath: `/images/${result.Key}` })
    } catch (error) {
        console.log(error);
    }

});

const downloadFile = catchAsyncErrors(async (req, res) => {

    try {
        const filename = req.params.filename
        console.log(filename);
        let x = await s3.getObject({ Bucket: BUCKET, Key: filename }).promise();
        res.send(x.Body)
    } catch (error) {
        console.log(error);
    }

});


module.exports = { allMessages, sendMessage, sendFile, downloadFile };