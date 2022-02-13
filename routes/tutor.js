const express = require('express');
const router = express.Router();

const { signUpTutor } = require('../controllers/tutor');

const { isAuthenticatedUser, isAuthenticatedAndroidUser, authorizeRoles } = require("../middleware/auth");

router.route("/tutor/signup").post(isAuthenticatedAndroidUser, signUpTutor);
router.route("/web/tutor/signup").post(isAuthenticatedUser, signUpTutor);

module.exports = router;