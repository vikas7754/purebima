const router = require("express").Router();
const adminController = require("../controllers/admin");
const { auth, roleAuth } = require("../middlewares/auth");

router.get("/charts", auth, roleAuth, adminController.getChartsData);
router.get(
  "/applications",
  auth,
  roleAuth,
  adminController.exportApplicationDataToExcel
);
router.get("/users", auth, roleAuth, adminController.exportUserDataToExcel);

module.exports = router;
