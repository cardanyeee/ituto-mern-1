const express = require("express");
const router = express.Router();
const { allMessages, sendMessage, downloadFile, accessFile } = require("../controllers/message");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const { upload } = require("../utils/upload");

router.route("/messages/:conversationID").get(isAuthenticatedUser, allMessages);
router.route("/message/send").post(upload.any(), isAuthenticatedUser, sendMessage);
router.route("/file/:key").get(accessFile);

router.get("/download/:filename", downloadFile);

module.exports = router;