const express = require('express');
const router = express.Router();

const {
    createSession,
    findTutorSession,
    findTuteeSession,
    allSession,
    selectedSession,
    requestSession,
    acceptSession,
    declineSession,
    cancelSession,
    doneSession,
    reviewTutor
} = require('../controllers/session');

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/session/create").post(isAuthenticatedUser, createSession);
router.route("/session/request").post(isAuthenticatedUser, requestSession);
router.route("/sessions/tutor").get(isAuthenticatedUser, findTutorSession);
router.route("/sessions/tutee").get(isAuthenticatedUser, findTuteeSession);
router.route('/session/decline/:id').put(isAuthenticatedUser, declineSession);
router.route('/session/accept/:id').put(isAuthenticatedUser, acceptSession);
router.route('/session/cancel/:id').put(isAuthenticatedUser, cancelSession);
router.route('/session/done/:id').put(isAuthenticatedUser, doneSession);
router.route("/session/tutor/review").put(isAuthenticatedUser, reviewTutor);
router.route("/sessions").get(allSession);
router.route("/session/:id").get(selectedSession);

module.exports = router;