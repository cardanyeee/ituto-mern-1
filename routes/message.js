const express = require("express");
const router = express.Router();
const { allMessages, sendMessage, sendFile, downloadFile, accessFile } = require("../controllers/message");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const { upload } = require("../utils/upload");

router.route("/messages/:conversationID").get(isAuthenticatedUser, allMessages);
router.route("/message/send").post(isAuthenticatedUser, sendMessage);
router.route("/file/:key").get(accessFile);
router.route("/file/send").post(upload.any(), sendFile);

router.get("/download/:filename", downloadFile);

module.exports = router;