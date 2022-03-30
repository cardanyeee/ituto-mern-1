const express = require('express');
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const {
    index,
    courseSubjects,
    add,
    update,
    find,
    reportsRequestedSubject,
    reportsTopSubject,
    reportsRequestedbyMale,
    reportsRequestedbyFemale
} = require('../controllers/subject');



//ANALYTICSSSSSS////    


router.route('/reports/subjects/toprequested').get(reportsRequestedSubject);
router.route('/reports/subjects/requestedbymale').get(reportsRequestedbyMale);
router.route('/reports/subjects/requestedbyfemale').get(reportsRequestedbyFemale);
router.route('/reports/subjects/topoffered').get(reportsTopSubject);



router.route('/subjects').get(index);
router.route('/course-subjects/:course').get(courseSubjects);
router.route('/subject/add').post(add);
router.route('/subject/update/:id').put(update);
router.route('/subject/:id').get(find);

module.exports = router;