const express = require('express')
const { blogs } = require('./model/index')
const app = express()



// database connection 
require("./model/index")

// telling the nodejs to set view-engine to ejs
app.set('view engine','ejs')


// form bata data aairaxa parse gara or handle gar vaneko ho
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// allBlog
app.get("/",async (req,res)=>{
    //blogs vanney table bata vayejati sabai data dey vaneko 
    const allBlogs = await blogs.findAll() 

    // blogs vanney key/name ma allBlogs/data pass gareko ejs file lai
    res.render('blogs',{blogs:allBlogs})
})

//createBlog
app.get("/createblog",(req,res)=>{
    res.render("createblogs")
})

//createBlog Post
app.post("/createblog",async (req,res)=>{
    
        // second approach
        // const {title,description,subtitle} = req.body
    // first approach
    const title = req.body.title
    const description  = req.body.description
    const subTitle = req.body.subtitle
   
    // database ma halnu paryo , database sanaga kehi operation await halnu parney hunchha 
    // agadi , await halepaxi mathi async halnu parney hunchha 
    await blogs.create({
        title : title,
        subTitle:subTitle,
        description : description
    })
    res.redirect("/")
})

// single blog page 
app.get("/single/:id",async(req,res)=>{
const id = req.params.id
// second approach
// const {id} = req.params 
// id ko data magnu/find garnu paryo hamro table bata
const blog =  await blogs.findAll({
    where : {
        id : id
    }
})
// second finding approach
// const blog = await blogs.findByPk(id)

    res.render("singleBlog",{blog:blog})
})

// delete page 
app.get("/delete/:id",async (req,res)=>{
    const id = req.params.id
    // blogs vanney table bata tyo id ko delete gar vaneko yaha
     await blogs.destroy({
        where : {
            id : id
        }
    })
   res.redirect("/")
})


app.listen(3000,()=>{
    console.log("NodeJs project has started at port 3000")
})