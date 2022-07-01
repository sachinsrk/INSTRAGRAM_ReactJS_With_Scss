const express = require("express");
const router = express.Router();
const signupController = require("../controllers/user");
const uploadController = require("../controllers/upload");
const thoughtController = require("../controllers/thought");
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser')

let routes = app => {
//for thought 
router.get("/api/fetchallthought", fetchuser,thoughtController.fetchthought)

router.post( "/api/writethought",fetchuser,[
  body("title", "Enter a valid title").isLength({ min: 3 }),
  body("description", "Description must be atleast 5 charcters").isLength({ min: 5,}),
], fetchuser,thoughtController.writethought)

router.put( "/api/updatethought/:id", fetchuser,thoughtController.updatethought)

router.delete( "/api/deletethought/:id", fetchuser,thoughtController.deletethought)




  // for signup auth
  router.post("/signup",[   // name must be at least 5 char
  body("name", "name can not be null or less than 3 charcter").isLength({ min: 5 }),
  // username must be an email
  body("email", "Email has to be valid ").isEmail(),
  // password must be at least 5 chars long
  body("password", "password can not be null or less than 5 charcter").isLength({ min: 5 }),
 // return res.sendFile(path.join(`${__dirname}/../views/index.html`));
  ], signupController.signup);

  //for login auth
    router.post("/login",[   // name must be at least 5 char
    // username must be an email
    body("email", "Email has to be valid ").isEmail(),
    // password must be at least 5 chars long
    body("password", "password can not be null ").exists(),
    ], signupController.login);

  //for get all user
    router.get("/getalluser",fetchuser ,signupController.getAlluser)

    ///////////////////////////////////////////////////////
    //for file upload 
  router.post("/upload",fetchuser ,uploadController.uploadFiles);
  router.get("/files", uploadController.getListFiles);
  router.get("/files/:name", uploadController.download);

  return app.use("/", router);
};

module.exports = routes;