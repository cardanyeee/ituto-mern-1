const express = require("express");
const router = express.Router();
const { allMessages, sendMessage } = require("../controllers/message");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/messages/:chatId").get(allMessages);
router.route("/message/send").post(isAuthenticatedUser, sendMessage);

module.exports = router;