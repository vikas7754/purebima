const router = require("express").Router();
const {
  getFaqs,
  createFaq,
  updateFaq,
  deleteFaq,
} = require("../controllers/faq");
const { auth, roleAuth } = require("../middlewares/auth");

router.get("/", getFaqs);
router.post("/", auth, roleAuth, createFaq);
router.put("/:id", auth, roleAuth, updateFaq);
router.delete("/:id", auth, roleAuth, deleteFaq);

module.exports = router;
