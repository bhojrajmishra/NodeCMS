const { renderCreateBlog, createBlog, allBlog, deleteBlog, singleBlog, editBlog, rendereditBlog } = require("../controller/blog/blogController");

const router = require("express").Router()


//kohi createBlog ma gayoo vanye k garney vaneko ho hae
router.route("/createBlog").get(renderCreateBlog).post(createBlog)
router.route("/").get(allBlog)
router.route("/single/:id").get(singleBlog)
router.route("/delete/:id").get(deleteBlog)
router.route("/edit/:id").get(rendereditBlog)
router.route("/editBlog/:id").post(editBlog)
//you can do this as well 
//router.route("/:id").get(singleBlog).post(editBlog)
module.exports = router;