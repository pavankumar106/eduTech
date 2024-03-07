const Section = require("../models/Section");
const Course = require("../models/Course");

//============================================Create Section ===========================================
//======================================================================================================
exports.createSection = async (req, res) => {
  try {
    // get data
    const { sectionName, courseId } = req.body;
    // validate
    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Missing required properties",
      });
    }
    // Create a new section with the given name
    const newSection = await Section.create({ sectionName });

    // Add the new section to the course's content array
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: {
          courseContent: newSection._id,
        },
      },
      { new: true }
    )
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();
    // Return the updated course object in the response
    res.status(200).json({
      success: true,
      message: "Section created successfully",
      updatedCourse,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

//============================================Update Section ===========================================
//======================================================================================================
exports.updateSection = async (req, res) => {
  try {
    // get data
    const { sectionName, sectionId } = req.body;

    // validate
    if (!sectionName || !sectionId) {
      return res.status(400).json({
        success: false,
        message: "Missing required properties",
      });
    }
    // update data
    const section = await Section.findByIdAndUpdate(
      sectionId,
      { sectionName },
      { new: true }
    );
    // return res
    res.status(200).json({
      success: true,
      message: "Section updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

//============================================delete Section ===========================================
//======================================================================================================
exports.deleteSection = async (req, res) => {
  try {
    // get data
    const { sectionId } = req.params;

    // delete data
    await Section.findByIdAndDelete(sectionId);
    // return res
    res.status(200).json({
      success: true,
      message: "Section deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};
