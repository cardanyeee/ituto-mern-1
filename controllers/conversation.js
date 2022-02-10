const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Conversation = require("../models/Conversation");
const User = require("../models/User");

const jwt = require('jsonwebtoken');

//@description     Create or fetch One to One Conversation
//@route           POST /api/chat/
//@access          Protected

// ===> CREATING A 1 ON 1 CHAT
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

    isConversation = await User.populate(isConversation, {
        path: "latestMessage.sender",
        select: "firstname"
    });

    if (isConversation.length > 0) {
        res.send(isConversation[0]);
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
            res.status(200).json(FullConversation);
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }
});

const fetchConversations = catchAsyncErrors(async (req, res) => {
    const user_id = jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET).id;
    
    try {
        Conversation.find({ users: { $elemMatch: { $eq: user_id } } })
            .populate("users", "-password -firstname -lastname -avatar -username -birthdate -gender -isTutor -enmail -role")
            .populate("latestMessage")
            .sort({ updatedAt: -1 })
            .then(async (results) => {
                results = await User.populate(results, {
                    path: "latestMessage.sender",
                    select: "firstname lastname avatar.url"
                });
                console.log(results);
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