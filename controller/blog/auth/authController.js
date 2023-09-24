const { users } = require("../../../model")
const bcrypt = require("bcryptjs")

exports.renderregisterForm = (req,res)=>{
    res.render("register")
}

exports.registerUser = async(req,res)=> {
    const {email, username,password,confirmPassword} = req.body 
    /*
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    const confirmPassword = req.body.ConfirmPassword

    
    */
   //check if password matches with confirmPassword
   if(password!==confirmPassword){
    return res.send("password and confirmpassword doesn't matched")
   }
   //insert into table (users)
await users.create({
    email : email,
    password : bcrypt.hashSync(password,8),
    username : username
})
res.redirect("/login")
}

//login stats from here

exports.renderLoginForm = (req,res)=>{
    res.render("login")
}

exports.loginuser = (req,res)=>{
    console.log(req.body)
    const {email,password} = req.body
}
