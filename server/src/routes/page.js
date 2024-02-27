const router = require("express").Router();
const pageController = require("../controllers/page");
const { auth, roleAuth } = require("../middlewares/auth");

router.get("/", auth, roleAuth, pageController.getAllPages);
router.get("/:slug", auth, roleAuth, pageController.getPage);
router.post("/", auth, roleAuth, pageController.createPage);
router.put("/", auth, roleAuth, pageController.updatePage);
router.delete("/:slug", auth, roleAuth, pageController.deletePage);

module.exports = router;
