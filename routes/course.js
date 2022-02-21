const express = require('express');
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const { index, add, update, find } = require('../controllers/course');

router.route('/courses').get(index);
router.route('/course/add').post(add);
router.route('/course/update/:id').put(update);
router.route('/course/:id').get(find);

module.exports = router;