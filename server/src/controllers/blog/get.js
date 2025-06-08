const Blog = require("../../models/blog");

const getBlogs = async (req, res) => {
  const { page = 1, limit = 12, category, type, related } = req.query;
  const skip = (page - 1) * limit;
  const sort = req.query?.sort || "recent";
  let sortBy = { createdAt: -1 };

  try {
    const query = {};
    if (category) {
      query.category = category;
    }
    if (type) {
      query.type = type;
    }
    switch (sort) {
      case "recent":
        sortBy = { createdAt: -1 };
        break;
      case "oldest":
        sortBy = { createdAt: 1 };
        break;
      default:
        sortBy = { createdAt: -1 };
        break;
    }

    if (related) {
      query.categories = { $in: related };
      sortBy = { averageReview: -1 };
    }

    const blogs = await Blog.find(query)
      .skip(skip)
      .limit(limit)
      .sort(sortBy)
      .select("-content");
    const total = await Blog.countDocuments(query);
    return res.status(200).json({ blogs, total });
  } catch (err) {
    return res.status(500).json({ message: err.message || "Server error." });
  }
};

module.exports = getBlogs;
