const express = require("express");
const router = express.Router();
const { allMessages, sendMessage, sendFile, downloadFile } = require("../controllers/message");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const multer = require('multer');
const upload = multer(
    {
        limits: {
            fieldNameSize: 999999999,
            fieldSize: 999999999
        },
        dest: 'uploads/'
    }
);

router.route("/messages/:conversationID").get(isAuthenticatedUser, allMessages);
router.route("/message/send").post(isAuthenticatedUser, sendMessage);
router.post('/file/send', upload.any(), sendFile);
// router.get("/download/:filename", downloadFile);

module.exports = router;