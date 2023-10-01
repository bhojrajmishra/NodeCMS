const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //logic to validate the fileType(mimtype)
    const allowedFileTypes = ['image/png','image/jpeg','image/jpg']
    
    //file.size>>=123
    
    if(!allowedFileTypes.includes(file.mimetype)){
      cb(new Error("Invalid FileType.Only supports png,jpeg,jpg"))
      return;
    }
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

module.exports = {
  multer,
  storage,
};