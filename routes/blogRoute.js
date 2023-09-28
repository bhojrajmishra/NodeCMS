const { renderCreateBlog, renderMyBlogs , createBlog, allBlog, deleteBlog, singleBlog, editBlog, rendereditBlog } = require("../controller/blog/blogController");
const { isAuthenticated } = require("../middleware/isAuthenticated");

const router = require("express").Router()


//kohi createBlog ma gayoo vanye k garney vaneko ho hae
router.route("/createBlog").get(renderCreateBlog).post(isAuthenticated, createBlog)
router.route("/").get(allBlog)
router.route("/single/:id").get(singleBlog)
router.route("/delete/:id").get(isAuthenticated, deleteBlog)
router.route("/edit/:id").get(rendereditBlog)
router.route("/editBlog/:id").post(isAuthenticated,editBlog) 
router.route("/myblogs").get(isAuthenticated, renderMyBlogs)
//you can do this as well 
//router.route("/:id").get(singleBlog).post(editBlog)
module.exports = router;