const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const dbConfig = require("../config/db");
const fetchuser = require('../middleware/fetchuser');
const { resolve } = require("path");

var storage = new GridFsStorage({
  url: dbConfig.url + dbConfig.database,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
     return new Promise((resolve,reject) => {
          const filename = `${Date.now()}-br-${file.originalname}`
          const fileInfos ={
            filename:filename,
            bucketName: dbConfig.imgBucket,
            user:'fdfdfd'
          }
          resolve(fileInfos)

        })
 }
});
var uploadFiles = multer({ storage: storage }).array("file", 10);
// var uploadFiles = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
// const match = ["image/png", "image/jpeg"];
//     console.log(file.mimetype)
//     if (match.indexOf(file.mimetype) === -1) {
//       const filename = `${Date.now()}-bezkoder-${file.originalname}`;
//       return filename;
//     }

//     return {
//       bucketName: dbConfig.imgBucket,
//       filename: `${Date.now()}-bezkoder-${file.originalname}`,
      
      
//     };