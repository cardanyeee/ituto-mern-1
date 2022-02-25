const express = require('express');
const router = express.Router();

const { index, signUpTutor, addSubject, getCurrentTutor } = require('../controllers/tutor');

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/tutor/signup").post(isAuthenticatedUser, signUpTutor);
router.route("/tutors").get(isAuthenticatedUser, index);

//Browser
router.route("/web/tutor/signup").post(isAuthenticatedUser, signUpTutor);
router.route("/web/tutor/add/subject").post(isAuthenticatedUser, addSubject);
router.route("/web/tutor/me").get(isAuthenticatedUser, getCurrentTutor);
router.route("/web/tutors").get(isAuthenticatedUser, index);

module.exports = router;