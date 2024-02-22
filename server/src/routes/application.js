const router = require("express").Router();
const controller = require("../controllers/application");
const { auth, roleAuth } = require("../middlewares/auth");

router.post("/", controller.saveApplication);
router.get("/", auth, roleAuth, controller.getApplications);

module.exports = router;
