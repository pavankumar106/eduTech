const Category = require("../models/Category");

// ==================================== Create Tag ===========================================
// ===========================================================================================

exports.createCategory = async (req, res) => {
  try {
    // get data from req.body
    const { name, description } = req.body;
    // validate
    if (!name || !description) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    // create entry in db
    const categoryDetails = await Category.create({
      name: name,
      description: description,
    });
    // return res
    return res.status(200).json({
      success: true,
      message: "Category created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==================================== get All Tags ===========================================
// =============================================================================================
exports.showAllCategory = async (req, res) => {
  try {
    const allCategories = await Category.find(
      {},
      { name: true, description: true }
    );
    return res.status(500).json({
      success: true,
      data: allCategories,
      message: "All Category are returned",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==================================== categoryPageDetails======================================
// =============================================================================================

exports.categoryPageDetails = async (req, res) => {
  try {
    //get categoryId
    const { categoryId } = req.body;
    //get courses for specified categoryId
    const selectedCategory = await Category.findById(categoryId)
      .populate("courses")
      .exec();
    //validation
    if (!selectedCategory) {
      return res.status(404).json({
        success: false,
        message: "Data Not Found",
      });
    }
    //get courses for different categories
    const differentCategories = await Category.find({
      _id: { $ne: categoryId },
    })
      .populate("courses")
      .exec();

    //get top 10 selling courses

    //return response
    return res.status(200).json({
      success: true,
      data: {
        selectedCategory,
        differentCategories,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
