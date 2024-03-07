const bcrypt = require("bcrypt");
const crypto = require("crypto");

const User = require("../models/User");
const mailSender = require("../utils/mailSender");

// =========================================================== reset password token=====================
// =====================================================================================================
exports.resetPasswordToken = async (req, res) => {
  try {
    // get email from req.body
    const email = req.body.email;
    // check user exists
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        success: false,
        message: `${email} is not Registered With Us Enter a Valid Email `,
      });
    }
    // create token
    const token = crypto.randomUUID();
    // update user token and expire time
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 10000,
      },
      { new: true }
    );
    console.log("DETAILS", updatedDetails);
    // create url
    const url = `http://localhost:3000/update-password/${token}`;

    // send mail with url
    await mailSender(
      email,
      "Password Reset",
      `Your Link for email verification is ${url}. Please click this url to reset your password.`
    );

    // return res
    res.status(200).json({
      success: true,
      message:
        "Email Sent Successfully, Please Check Your Email to Continue Further",
    });
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Sending the Reset Message`,
    });
  }
};

// =========================================================== reset password ==========================
// =====================================================================================================
exports.resetPassword = async (req, res) => {
  try {
    // get data
    const { password, confirmPassword, token } = req.body;

    // validation
    if (confirmPassword !== password) {
      return res.json({
        success: false,
        message: "Password and Confirm Password Does not Match",
      });
    }
    // get user details
    const userDetails = await User.findOne({ token: token });
    if (!userDetails) {
      return res.json({
        success: false,
        message: "Token is Invalid",
      });
    }
    // check token time
    if (!(userDetails.resetPasswordExpires > Date.now())) {
      return res.status(403).json({
        success: false,
        message: `Token is Expired, Please Regenerate Your Token`,
      });
    }
    // hash password and update
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.findOneAndUpdate(
      { token: token },
      { password: encryptedPassword },
      { new: true }
    );
    // return res
    res.json({
      success: true,
      message: `Password Reset Successful`,
    });
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Updating the Password`,
    });
  }
};
