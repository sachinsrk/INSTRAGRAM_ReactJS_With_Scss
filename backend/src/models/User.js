const mongoose = require('mongoose')
// connect to mongoose
const { Schema } = mongoose;
//schema for mogo db structure
const UserSchema = new Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true,
        unique:true
    },
    password:{
        type:String,
        require: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
  });

  module.exports = mongoose.model('user', UserSchema);
