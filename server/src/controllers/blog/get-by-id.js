const Blog = require("../../models/blog");
const mongoose = require("mongoose");

const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    let blog = null;
    // Check for valid MongoDB ObjectId
    if (mongoose.Types.ObjectId.isValid(id)) {
      blog = await Blog.findById(id);
    }
    // If not found by ID or ID is not valid, try slug
    if (!blog) {
      blog = await Blog.findOne({ slug: id });
    }

    if (!blog) {
      return res.status(404).json({ message: "Blog not found!" });
    }

    const result = blog.toObject();

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message || "Server error." });
  }
};

module.exports = getBlogById;
