// Import the required modules
const express = require("express");
const router = express.Router();

// Import the Controllers

// Course Controllers Import
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
} = require("../controllers/Course");

// Categories Controllers Import
const {
  showAllCategory,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Category");

// Sections Controllers Import
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section");

// Sub-Sections Controllers Import
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection");

// Rating Controllers Import
const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/RatingAndReview");

// Importing Middlewares
const {
  auth,
  isInstructor,
  isStudent,
  isAdmin,
} = require("../middlewares/auth");

// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
// router.post("/createCourse", function (req, res) {
//   auth, isInstructor, createCourse;
// });
router.route("/createCourse").post(auth, isInstructor, createCourse);
//Add a Section to a Course
router.post("/addSection", function (req, res) {
  auth, isInstructor, createSection;
});
// Update a Section
router.post("/updateSection", function (req, res) {
  auth, isInstructor, updateSection;
});
// Delete a Section
router.post("/deleteSection", function (req, res) {
  auth, isInstructor, deleteSection;
});
// Edit Sub Section
router.post("/updateSubSection", function (req, res) {
  auth, isInstructor, updateSubSection;
});
// Delete Sub Section
router.post("/deleteSubSection", function (req, res) {
  auth, isInstructor, deleteSubSection;
});
// Add a Sub Section to a Section
router.post("/addSubSection", function (req, res) {
  auth, isInstructor, createSubSection;
});
// Get all Registered Courses
router.get("/getAllCourses", function () {
  getAllCourses;
});
// Get Details for a Specific Courses
router.post("/getCourseDetails", function (req, res) {
  getCourseDetails;
});

// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
//Put IsAdmin Middleware here
router.route("/createCategory").post(auth, isAdmin, createCategory);

router.route("/showAllCategories").get(auth, showAllCategory);
router.post("/getCategoryPageDetails", function (req, res) {
  categoryPageDetails;
});

// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
router.post("/createRating", function (req, res) {
  auth, isStudent, createRating;
});
router.get("/getAverageRating", function () {
  getAverageRating;
});
router.get("/getReviews", function () {
  getAllRating;
});

module.exports = router;
