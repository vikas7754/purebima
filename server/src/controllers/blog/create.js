const Blog = require("../../models/blog");

const create = async (req, res) => {
  const user = req.user;
  try {
    const newBlog = new Blog(req.body);
    newBlog.author = user._id;
    if (user.role === "admin") newBlog.status = "published";
    else newBlog.status = "pending";
    await newBlog.save();
    return res.status(200).json({ message: "Blog created successfully." });
  } catch (err) {
    return res.status(500).json({ message: err.message || "Server error." });
  }
};

module.exports = create;
