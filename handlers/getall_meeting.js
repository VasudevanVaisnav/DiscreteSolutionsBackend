const Meeting = require('../models/Meeting.js');
const mongoose = require("mongoose")

function getAllMeeting(req,res,next)
{
  // do it
  Meeting.find({$and:[{emailId:req.params.emailId},{isCompleted:false}]}).exec().then(result=>{  
    res.status(200).json({"meetingsCount":result.length,result})
  }).catch(err=>{
    console.log(err);
    res.status(201).json({"error":err})
    next(err)
  })
}
module.exports = getAllMeeting;