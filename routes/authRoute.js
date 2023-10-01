const { registerUser, renderregisterForm, renderLoginForm, loginuser, logOut } = require("../controller/blog/auth/authController");

const router = require("express").Router()


//app.get("/register",register)

router.route("/register").get(renderregisterForm).post(registerUser)
router.route("/login").get(renderLoginForm).post(loginuser)
router.route("/logout").get(logOut)

module.exports = router;loginuser