const { renderCreateBlog, renderMyBlogs , createBlog, allBlog, deleteBlog, singleBlog, editBlog, rendereditBlog } = require("../controller/blog/blogController");
const { isAuthenticated } = require("../middleware/isAuthenticated");

const router = require("express").Router()

const { multer, storage } = require("../middleware/multerConfig");
const upload = multer({ storage: storage });


//kohi createBlog ma gayoo vanye k garney vaneko ho hae
router.route("/createBlog").get(isAuthenticated,renderCreateBlog).post(isAuthenticated,upload.single('image'), createBlog)
router.route("/").get(allBlog)
router.route("/single/:id").get(isAuthenticated,singleBlog)
router.route("/delete/:id").get(isAuthenticated, deleteBlog)
router.route("/edit/:id").get(rendereditBlog)
router.route("/editBlog/:id").post(isAuthenticated,editBlog) 
router.route("/myblogs").get(isAuthenticated, renderMyBlogs)

//you can do this as well 
//router.route("/:id").get(singleBlog).post(editBlog)
module.exports = router;