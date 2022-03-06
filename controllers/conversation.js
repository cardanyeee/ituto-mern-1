const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Conversation = require("../models/Conversation");
const User = require("../models/User");

const jwt = require('jsonwebtoken');

const accessConversation = catchAsyncErrors(async (req, res) => {
    const { userId } = req.body;

    if (!userId) // ==> check if chat with that ID exist  
    {
        console.log("UserId param not sent with request");
        return res.sendStatus(400);
    }

    var isConversation = await Conversation.find({
        $and: [
            { users: { $elemMatch: { $eq: req.user._id } } },
            { users: { $elemMatch: { $eq: userId } } },
        ]
    })
        .populate("users", "-password")
        .populate("latestMessage");

    console.log(isConversation);
    isConversation = await User.populate(isConversation, {
        path: "latestMessage.sender",
        select: "firstname"
    });

    if (isConversation.length > 0) {
        res.status(200).json({
            success: true,
            conversation: isConversation[0]
        });
        // res.send(isConversation[0]);
    } else {
        var conversationData = {
            conversationName: "sender",
            isGroupConversation: false,
            users: [req.user._id, userId],
        };


        try {
            const createdConversation = await Conversation.create(conversationData);
            const FullConversation = await Conversation.findOne({ _id: createdConversation._id }).populate(
                "users",
                "-password"
            );
            res.status(200).json({
                success: true,
                conversation: FullConversation
            });
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }
});

const fetchConversations = catchAsyncErrors(async (req, res) => {

    try {
        Conversation.find({ users: { $elemMatch: { $eq: req.user._id } } })
            .populate("users", "-password -username -birthdate -gender -isTutor -enmail -role")
            .populate("latestMessage")
            .sort({ updatedAt: -1 })
            .then(async (results) => {
                results = await User.populate(results, {
                    path: "latestMessage.sender",
                    select: "firstname lastname avatar.url"
                });
                res.status(200).send({
                    success: true,
                    results
                });
            });

    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

module.exports = { accessConversation, fetchConversations };