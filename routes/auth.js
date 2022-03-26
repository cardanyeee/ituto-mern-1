const express = require('express');
const router = express.Router();

const { register,
    login,
    activate,
    googleLogin,
    logout,
    forgotpassword,
    resetpassword,
    getCurrentUser,
    updateUser,
    findUser,
    updatePassword,
    updateProfile,
    allUsers,
    dashboard,
    getProfile,
    checkEmail
} = require('../controllers/auth');

const { upload } = require("../utils/upload");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/auth/check/email").post(checkEmail);

router.route("/auth/register").post(upload.any(), register);

router.route("/auth/activate").post(activate);

router.route("/auth/login").post(login);

router.route("/auth/google/login").post(googleLogin);

router.route("/auth/logout").get(logout);

router.route("/auth/password/forgot").post(forgotpassword);

router.route("/auth/password/reset").post(resetpassword);

router.route("/profile/me").get(isAuthenticatedUser, getCurrentUser);

router.route('/user/update/:id').put(isAuthenticatedUser, updateUser);

router.route('/user/:id').get(findUser);

router.route("/auth/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/profile/update").put(isAuthenticatedUser, upload.any(), updateProfile);

router.route("/profile/:key").get(getProfile);

router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), allUsers);

router.route('/admin/data').get(isAuthenticatedUser, authorizeRoles('admin'),dashboard);

module.exports = router;