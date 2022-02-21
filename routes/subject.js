const express = require('express');
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const { index, add, update, find } = require('../controllers/subject');

router.route('/subjects').get(index);
router.route('/subject/add').post(add);
router.route('/subject/update/:id').put(update);
router.route('/subject/:id').get(find);

module.exports = router;