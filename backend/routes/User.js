const express = require("express");
const { followUser, updatePassword, updateProfile, deleteMyProfile, MyProfile,getUserProfile, getAllUsers, forgotPassword, resetPassword } = require("../controllers/User");
const {isAuthenticated} = require("../middlewares/auth") 
const {register, login, logout} = require("../controllers/User")

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login)

router.route("/follow/:id").get(isAuthenticated, followUser)

router.route("/logout").get(logout);

router.route("/update/password").put(isAuthenticated, updatePassword);

router.route("/update/profile").put(isAuthenticated, updateProfile)

router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);

router.route("/me").get(isAuthenticated, MyProfile)

router.route("/user/:id").get(isAuthenticated, getUserProfile);

router.route("/users").get(isAuthenticated, getAllUsers);

router.route("/forgot/password").post(isAuthenticated, forgotPassword);

router.route("/password/reset/:token").put(resetPassword);


module.exports = router;
