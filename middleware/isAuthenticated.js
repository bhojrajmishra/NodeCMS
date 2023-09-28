const jwt  = require("jsonwebtoken")
const { users } = require("../model")
const promisify = require("util").promisify


exports.isAuthenticated = async(req,res,next)=>{
 const token = req.cookies.token
 //check if token given or not 
 if(!token){
    return res.send("you must be login")
 }

 //verify token if it is legit or not 
 const decodeResult = await promisify(jwt.verify)(token,process.env.SECRETKEY)
 console.log(decodeResult)

 //check if that id(userId) user table ma exist xa 
 const usersExists = await users.findAll({
    where : {
        id: decodeResult.id
    }
 })
 //check if length is zero or not(zero-> userExist gardaina)
 if(usersExists.length == 0 ){
    res.send("you are not valid user or you are not login")
 }
 else{
    req.user=  usersExists;
    req.userId = usersExists[0].id//alternative decodeResult.id ||
    next();
 }
   

}