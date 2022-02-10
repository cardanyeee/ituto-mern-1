const express = require("express");
const router = express.Router();
const { accessConversation, fetchConversations } = require("../controllers/conversation");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/conversation").post(isAuthenticatedUser, accessConversation);
router.route("/conversations").get(fetchConversations);

module.exports = router;