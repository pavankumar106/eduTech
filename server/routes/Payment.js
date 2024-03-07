// Import the required modules
const express = require("express");
const router = express.Router();

const { capturePayment, verifySignature } = require("../controllers/Payments");
const {
  auth,
  isInstructor,
  isStudent,
  isAdmin,
} = require("../middlewares/auth");
router.post("/capturePayment", function () {
  auth, isStudent, capturePayment;
});
router.post("/verifySignature", function () {
  verifySignature;
});

module.exports = router;
