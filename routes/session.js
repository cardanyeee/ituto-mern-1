const express = require('express');
const router = express.Router();

const {
    createSession,
    findTutorSession,
    findTuteeSession,
    allSession,
    selectedSession

} = require('../controllers/session');

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/session/create").post(createSession);
router.route("/sessions/tutor").get(isAuthenticatedUser, findTutorSession);
router.route("/sessions/tutee").get(isAuthenticatedUser, findTuteeSession);
router.route("/sessions").get(allSession);
router.route("/session/:id").get(selectedSession);

module.exports = router;