const Blog = require("../../models/blog");

const deleteBlog = async (req, res) => {
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
    await Blog.findByIdAndDelete(id);
    return res.status(200).json({ message: "Blog deleted successfully." });
  } catch (err) {
    return res.status(500).json({ message: err.message || "Server error." });
  }
};
module.exports = deleteBlog;
