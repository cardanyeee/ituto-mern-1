const express = require('express');
const router = express.Router();

const {
    create,
    find,
    allExam,
    selectedExam
} = require('../controllers/assessment');

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/assessment/create").post(create);
router.route("/assessment/tutor/:id").get(find);
router.route("/assessments").get(allExam);
router.route("/assessment/:id").get(selectedExam);

module.exports = router;