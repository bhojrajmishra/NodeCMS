const { users } = require("../../../model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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

exports.loginuser = async(req,res)=>{
    console.log(req.body)
    const {email,password} = req.body
    //server side validation
    if(!email || !password){
        return res.send("email and password are required")
    }
    // check if that email exists or not 
  const associatedDatawithEmail = await users.findAll({
       where :{email : email} 
    })
    if(associatedDatawithEmail.length == 0){
        res.send("email and password doesn't exists")
    }
    else{
        const associtedEmailPassword = associatedDatawithEmail[0].password
       const isMatched =  bcrypt.compareSync(password,associtedEmailPassword) //true or false
       if(isMatched){
        //generate token here
    const token = jwt.sign({id:associatedDatawithEmail[0].id},process.env.SECRETKEY,{
        expiresIn :"30d"
    })
    res.cookie('token',token)//browser ma application tab vitra cookie vanney ma save hunxa
    console.log("this is token" + token)
         res.send("login succesfully")
       }
       else{
         res.send("Invalid password")
       }
    }
    //exist xaina vanye - > {}, xa vanye [{name:"",}]
}

exports.logOut = (req,res)=> {
    res.clearCookie('token')
    res.redirect("/login")
}