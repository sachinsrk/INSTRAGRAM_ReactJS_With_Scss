const express = require('express');
//connect to model user
const User = require('../models/User')
//connect to router 
const router = express.Router();
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');
const multer = require("multer");
// bcrypt js
const bcrypt = require('bcrypt');
// auth token 
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
// router end point plus
const JWT_Token = 'srk011g21'

router.post('/upload', function (req, res) {
    console.log(req.files.image);
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    const file = req.files.image;
    const path = __dirname + "/files/" + file.name;

    file.mv(path, async (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        else{
            user = await User.create({
                image: req.files.image,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
        return res.send({ status: "success", path: path });
        }
    });
});

///1/craete user using : Post "api/auth/signup". Doesn't require login
router.post('/signup', [
    // name must be at least 5 char
    body("name", "name can not be null or less than 3 charcter").isLength({ min: 5 }),
    // username must be an email
    body("email", "Email has to be valid ").isEmail(),
    // password must be at least 5 chars long
    body("password", "password can not be null or less than 5 charcter").isLength({ min: 5 }),

], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // chech whether user exit aleredy

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exits" })
        }
        // salt of bcrypt adding to password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        ///

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        // auth token impliment
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_Token);
        //reponse token
        res.json({ authToken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured")
    }

})


///2/login user using : Post "api/auth/login". Doesn't require login
router.post('/login', [
    // username must be an email
    body("email", "Email has to be valid ").isEmail(),
    // password must be at least 5 chars long
    body("password", "password can not be null ").exists(),

], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        // chech whether user exit or not
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }
        // compare password with bcrypt hash password
        const pwdCompare = await bcrypt.compare(password, user.password);
        //condition of returning true or false
        if (!pwdCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }
        // auth token impliment
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_Token);
        // reponse token
        res.json({ authToken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured")
    }

})


///3/get user using : Post "api/auth/getuser". require login
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        //req.user.id coming from fetchuser
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured")
    }

})



module.exports = router