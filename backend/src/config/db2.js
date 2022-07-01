//connect to database mogodb server
const mongoose = require('mongoose');
//mongodb uri
const mongoURI = "mongodb://localhost:27017/instragram";

//arrow function code to connect to mongoose
const connectToMongo = () => {
    //mongoose connect  fucntion first argumrnt uri then second can return callback 
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongoose successfully")
    })
 }
module.exports = connectToMongo