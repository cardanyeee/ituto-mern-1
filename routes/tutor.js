const express = require('express');
const router = express.Router();

const { index, signUpTutor, addSubject, getCurrentTutor, findTutor, activateTutor } = require('../controllers/tutor');

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/tutor/signup").post(signUpTutor);
router.route("/tutor/activate").post(activateTutor);


router.route("/tutors").get(isAuthenticatedUser, index);
router.route("/tutor/subject/add").post(isAuthenticatedUser, addSubject);
router.route("/tutor/:id").get(isAuthenticatedUser, findTutor);

//Browser

router.route("/web/tutor/me").get(isAuthenticatedUser, getCurrentTutor);
router.route("/web/tutors").get(isAuthenticatedUser, index);

module.exports = router;