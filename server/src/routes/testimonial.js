const router = require("express").Router();
const {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  uploadImage,
} = require("../controllers/testimonial");
const { auth, roleAuth } = require("../middlewares/auth");

router.get("/", getTestimonials);
router.post("/", auth, roleAuth, createTestimonial);
router.put("/:id", auth, roleAuth, updateTestimonial);
router.delete("/:id", auth, roleAuth, deleteTestimonial);
router.post("/upload-img", uploadImage);

module.exports = router;
