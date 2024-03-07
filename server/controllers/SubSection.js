const Section = require("../models/Section");
const SubSection = require("../models/Subsection");
const { uploadFileToCloudinary } = require("../utils/imageUploader");

// ===================================================Create SubSection ==========================================
// ===============================================================================================================
exports.createSubSection = async (req, res) => {
  try {
    // get data from the request body
    const { sectionId, title, description } = req.body;
    const video = req.files.video;

    // Check if all necessary fields are provided
    if (!sectionId || !title || !description || !video) {
      return res
        .status(404)
        .json({ success: false, message: "All Fields are Required" });
    }
    console.log(video);
    // Upload the video file to Cloudinary
    const uploadDetails = await uploadFileToCloudinary(
      video,
      process.env.FOLDER_NAME
    );
    console.log(uploadDetails);
    // Create a new sub-section with the necessary information
    const SubSectionDetails = await SubSection.create({
      title: title,
      timeDuration: `${uploadDetails.duration}`,
      description: description,
      videoUrl: uploadDetails.secure_url,
    });
    // Update the corresponding section with the newly created sub-section
    const updatedSection = await Section.findByIdAndUpdate(
      { _id: sectionId },
      { $push: { subSection: SubSectionDetails._id } },
      { new: true }
    ).populate("subSection");

    // Return  response
    return res.status(200).json({ success: true, data: updatedSection });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

// ===================================================Update SubSection ==========================================
// ===============================================================================================================
exports.updateSubSection = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};
// ===================================================delete SubSection ==========================================
// ===============================================================================================================
exports.deleteSubSection = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};
