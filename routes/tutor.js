const express = require('express');
const router = express.Router();

const { index, signUpTutor, addSubject, getCurrentTutor } = require('../controllers/tutor');

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/tutor/signup").post(isAuthenticatedUser, signUpTutor);
router.route("/tutors").get(isAuthenticatedUser, index);
router.route("/tutor/subject/add").post(isAuthenticatedUser, addSubject);

//Browser

router.route("/web/tutor/me").get(isAuthenticatedUser, getCurrentTutor);
router.route("/web/tutors").get(isAuthenticatedUser, index);

module.exports = router;