const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadFileToCloudinary } = require("../utils/imageUploader");

// ============================================= Update profile =================================================
// ==============================================================================================================
exports.updateProfile = async (req, res) => {
  try {
    // get data
    const {
      dateOfBirth = "",
      about = "",
      contactNumber,
      gender = "",
    } = req.body;

    // get userId
    const id = req.user.id;
    // validate
    if (!dateOfBirth || !about || !contactNumber || !gender) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }
    // find profile
    const userDetails = await User.findById(id);
    const profile = await Profile.findById(userDetails.additionalDetails);
    // update profile
    profile.dateOfBirth = dateOfBirth;
    profile.about = about;
    profile.contactNumber = contactNumber;
    profile.gender = gender;

    // Save the updated profile
    await profile.save();
    // return res
    return res.json({
      success: true,
      message: "Profile updated successfully",
      profile,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

// ============================================= delete account =================================================
// ==============================================================================================================
exports.deleteAccount = async (req, res) => {
  try {
    // get user id
    const id = req.user.id;
    // validate
    const user = await User.findById({ _id: id });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // Delete Assosiated Profile with the User
    await Profile.findByIdAndDelete({ _id: user.additionalDetails });
    // Unenroll User From All the Enrolled Courses
    // Now Delete User
    await User.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "User Cannot be deleted successfully",
    });
  }
};
// ============================================= getAllUserDetails =============================================
// ==============================================================================================================
exports.getUserDetails = async (req, res) => {
  try {
    // get id
    const id = req.user.id;
    // validate
    const userDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();
    // return res
    res.status(200).json({
      success: true,
      data: userDetails,
      message: "User data fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "User details Cannot be fetched, please try again later ",
    });
  }
};
////////////////////////////////////////////////// Update profile pic
exports.updateDisplayPicture = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Route making is in progress",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message:
        "User profile picture Cannot be updated, please try again later ",
    });
  }
};
