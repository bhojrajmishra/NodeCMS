const express = require("express")// requiring express package
const app = express()//storing it in app, app vaneko variable throughout the project use garxam
//ma ejs use garna aateko xu ,, kk chayenxa ho env set garxa
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    //views vitra ko file render garxa
    res.render("blogs")
})

app.get('/createblogs',(req,res)=>{
    res.render("createblogs")
})

//createblog 

app.post("/createblogs",(req,res)=>{
    console.log(req.body)
    res.send("form send successfuly")
})

// port number -> room number for the 
app.listen(3000,()=>{
    console.log("Node js project has started on 3000")
})