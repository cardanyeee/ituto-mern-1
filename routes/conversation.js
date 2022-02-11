const express = require("express");
const router = express.Router();
const { accessConversation, fetchConversations } = require("../controllers/conversation");
const { isAuthenticatedUser, isAuthenticatedAndroidUser, authorizeRoles } = require("../middleware/auth");

router.route("/conversation").post(isAuthenticatedAndroidUser, accessConversation);
router.route("/conversations").get(isAuthenticatedAndroidUser, fetchConversations);

module.exports = router;