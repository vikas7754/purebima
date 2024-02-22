const router = require("express").Router();
const controller = require("../controllers/user");
const { auth, isLogin, roleAuth } = require("../middlewares/auth");

router.post("/login", isLogin, controller.login);
router.post("/signup", isLogin, controller.signup);
router.post("/googlelogin", controller.googleLogin);
router.get("/logout", auth, controller.logout);
router.get("/me", isLogin, controller.getLoginUser);

module.exports = router;
