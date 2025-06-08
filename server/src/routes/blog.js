const router = require("express").Router();

const blogController = require("../controllers/blog");
const { auth, roleAuth } = require("../middlewares/auth");

/**
 * @route POST api/blog
 * @desc Create Blog
 * @access Public
 */
router.post("/", auth, roleAuth, blogController.create);

/**
 * @route POST api/blog/upload-file
 * @desc Upload file for Blog
 * @access Private
 */
router.post("/upload-file", auth, blogController.uploadFile);

/**
 * @route GET api/blog
 * @desc Get all Blogs
 * @access Public
 */
router.get("/", blogController.getBlogs);

/**
 * @route GET api/blog/search
 * @desc Search Blogs
 * @access Public
 */
router.get("/search", blogController.searchBlogs);

/**
 * @route PUT api/blog/:id
 * @desc Update Blog by id
 * @access Public
 */
router.put("/:id", auth, roleAuth, blogController.updateBlog);

/**
 * @route DELETE api/blog/:id
 * @desc Delete Blog by id
 * @access Private
 */
router.delete("/:id", auth, roleAuth, blogController.deleteBlog);

/**
 * @route GET api/blog/:id
 * @desc Get Blog by id
 * @access Public
 */
router.get("/:id", blogController.getBlogById);

module.exports = router;
