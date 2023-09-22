const express = require('express')
const { blogs, sequelize } = require('./model/index')
const { QueryTypes } = require('sequelize')
const { renderCreateBlog, createBlog, allBlog, singleBlog, deleteBlog, rendereditBlog, editBlog } = require('./controller/blog/blogController')
const app = express()


//routes here
const blogRoute = require("./routes/blogRoute")
// database connection 
require("./model/index")

// telling the nodejs to set view-engine to ejs
app.set('view engine','ejs')

// nodejs lai  file access garna dey vaneko hae yo code lay 
app.use(express.static("public/"))


// form bata data aairaxa parse gara or handle gar vaneko ho
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("",blogRoute) //localhost: 3000 + /createBlog === lochost:3000/createBlog



app.listen(3000,()=>{
    console.log("NodeJs project has started at port 3000")
})