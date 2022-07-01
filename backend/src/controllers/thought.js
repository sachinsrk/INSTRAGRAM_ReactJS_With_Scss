const path = require("path");
const express = require('express');
// const connectToMongo = require("../config/db2");
// connectToMongo();
//connect to router 
const router = express.Router();``
//connect to model user
const fetchuser = require("../middleware/fetchuser");
const Thought = require('../models/Thought')

// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');

//fetch all thought
const fetchthought = async (req, res) => {
    try {
      const thought = await Thought.find({ thought: req.user.id });
      res.json(thought);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Eternal Server Error Occured");
    }

}

// write a thought
const writethought = async (req, res) => {
    try {
        const {title,description,tag} = req.body
      const errors = validationResult(req);
      //if there are error return bad request
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const thought = new Thought({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveThought = await thought.save();
      res.json(saveThought);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Eternal Server Error Occured");
    }
  }
//Update a thought
const updatethought = async (req, res) => {
    try {
        // get body json
        const {title,description,tag} = req.body
        // create a new note
        const newThought = {};
        if(title){newThought.title = title};
        if(description){newThought.description = description};
        if(tag){newThought.tag = tag};

        //check whether note belong to same use3r or not and 
        //also check note exit or not
        console.log(req.params.id)
         let thought =await Thought.findById(req.params.id);
         if(!thought){
          return  res.status(404).send("Note Found")
         }
         if(thought.user.toString() !== req.user.id){
            return res.status().send("Unauthorize Access")
         }        

        // find the  note to be updated and update it
        thought = await Thought.findByIdAndUpdate(req.params.id,{$set: newThought}, {new:true})
         res.json({thought});

    //   res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Eternal Server Error Occured");
    }
  }

  const deletethought =   async (req, res) => {
    try {
       
        //check whether note belong to same use3r or not and 
        //also check note exit or not
         let thought =await Thought.findById(req.params.id);
         if(!thought){
          return  res.status(404).send("Note Found")
         }
         if(thought.user.toString() !== req.user.id){
            return res.status().send("Unauthorize Access")
         }        

        // find the  note to be delete and delete it
        thought = await Thought.findByIdAndDelete(req.params.id)
         res.json("Deleted succesfully");

    //   res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Eternal Server Error Occured");
    }
  }

module.exports = {
    fetchthought: fetchthought,
    writethought: writethought,
    updatethought: updatethought,
    deletethought:deletethought
};
