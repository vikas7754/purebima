const router = require("express").Router();
const adminController = require("../controllers/admin");
const { auth, roleAuth } = require("../middlewares/auth");

router.get("/charts", auth, roleAuth, adminController.getChartsData);

module.exports = router;
