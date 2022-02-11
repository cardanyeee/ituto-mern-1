const express = require("express");
const router = express.Router();
const { allMessages, sendMessage } = require("../controllers/message");
const { isAuthenticatedUser, isAuthenticatedAndroidUser, authorizeRoles } = require("../middleware/auth");

router.route("/messages/:conversationID").get(isAuthenticatedAndroidUser, allMessages);
router.route("/message/send").post(isAuthenticatedAndroidUser, sendMessage);

module.exports = router;