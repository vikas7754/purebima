const create = require("./create");
const deleteBlog = require("./delete");
const updateBlog = require("./update");
const getBlogs = require("./get");
const searchBlogs = require("./search");
const getBlogById = require("./get-by-id");
const uploadFile = require("./upload-file");

module.exports = {
  create,
  deleteBlog,
  updateBlog,
  getBlogs,
  searchBlogs,
  getBlogById,
  uploadFile,
};
