const { registerUser, renderregisterForm, renderLoginForm, loginuser } = require("../controller/blog/auth/authController");

const router = require("express").Router()


//app.get("/register",register)

router.route("/register").get(renderregisterForm).post(registerUser)
router.route("/login").get(renderLoginForm).post(loginuser)



module.exports = router;loginuser