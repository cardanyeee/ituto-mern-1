const express = require('express');
const router = express.Router();

const {
    createSession,
    findTutorSession,
    findTuteeSession,
    findAllTutorSession,
    findAllTuteeSession,
    allSession,
    selectedSession,
    requestSession,
    acceptSession,
    declineSession,
    cancelSession,
    doneSession,
    reviewTutor,
    reportstuteeYearLevel,
    reportsprefferedDays,
    reportsMostMonthsRequested,
    reportsPreferredTime
} = require('../controllers/session');

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

//ANALYTICSSSSSS ///
router.route("/reports/session/topratedyearlevel").get(isAuthenticatedUser, reportstuteeYearLevel);
router.route("/reports/session/prefferedsessiondays").get(isAuthenticatedUser, reportsprefferedDays);
router.route("/reports/session/topmonthsrequested").get(isAuthenticatedUser, reportsMostMonthsRequested);
router.route("/reports/session/preferredtime").get(isAuthenticatedUser, reportsPreferredTime);


router.route("/session/create").post(isAuthenticatedUser, createSession);
router.route("/session/request").post(isAuthenticatedUser, requestSession);
router.route("/sessions/tutor").get(isAuthenticatedUser, findTutorSession);
router.route("/sessions/tutee").get(isAuthenticatedUser, findTuteeSession);
router.route("/sessions/tutor/all").get(isAuthenticatedUser, findAllTutorSession);
router.route("/sessions/tutee/all").get(isAuthenticatedUser, findAllTuteeSession);

router.route('/session/decline/:id').put(isAuthenticatedUser, declineSession);
router.route('/session/accept/:id').put(isAuthenticatedUser, acceptSession);
router.route('/session/cancel/:id').put(isAuthenticatedUser, cancelSession);
router.route('/session/done/:id').put(isAuthenticatedUser, doneSession);
router.route("/session/tutor/review").put(isAuthenticatedUser, reviewTutor);

router.route("/sessions").get(allSession);
router.route("/session/:id").get(selectedSession);

// router.route("/session/")




module.exports = router;