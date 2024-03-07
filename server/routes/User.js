// Import the required modules
const express = require("express");
const router = express.Router();

const {
  login,
  sendOTP,
  changePassword,
  signUp,
} = require("../controllers/Auth");
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");

const { auth } = require("../middlewares/auth");

// Route for user login
router.route("/login").post(login);

// Route for user signup
router.route("/signup").post(signUp);

// Route for sending OTP to the user's email
router.post("/sendotp", sendOTP);

// Route for Changing the password
router.post("/changepassword", function () {
  auth, changePassword;
});

// Route for generating a reset password token
router.route("/reset-password-token").post(auth, resetPasswordToken);

// Route for resetting user's password after verification
router.route("/reset-password").post(resetPassword);

// Export the router for use in the main application
module.exports = router;
