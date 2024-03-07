const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const {
  deleteAccount,
  updateProfile,
  getUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
} = require("../controllers/Profile");

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delete User Account
router.delete("/deleteProfile", auth, deleteAccount);
router.put("/updateProfile", auth, updateProfile);
router.route("/getUserDetails").get(auth, getUserDetails);
// Get Enrolled Courses
router.get("/getEnrolledCourses", function () {
  auth, getEnrolledCourses;
});
// update profile picture
router.route("/updateDisplayPicture").put(auth, updateDisplayPicture);

module.exports = router;
