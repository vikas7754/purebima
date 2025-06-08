const Blog = require("../../models/blog");

const updateBlog = async (req, res) => {
  const user = req.user;
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }
    if (
      blog.author.toString() !== user._id.toString() &&
      user.role !== "admin"
    ) {
      return res.status(401).json({ message: "Unauthorized." });
    }
    await Blog.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ message: "Blog updated successfully." });
  } catch (err) {
    return res.status(500).json({ message: err.message || "Server error." });
  }
};

module.exports = updateBlog;
