const express = require('express');
const router = express.Router();

const {
    create,
    findTutorAssessments,
    findTuteeAssessments,
    allExam,
    selectedExam,
    answerAssessment
} = require('../controllers/assessment');

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/assessment/create").post(isAuthenticatedUser, create);
router.route("/assessment/answer/:id").post(isAuthenticatedUser, answerAssessment);
router.route("/assessment/tutor").get(isAuthenticatedUser, findTutorAssessments);
router.route("/assessment/tutee").get(isAuthenticatedUser, findTuteeAssessments);
router.route("/assessments").get(allExam);
router.route("/assessment/:id").get(selectedExam);


module.exports = router;