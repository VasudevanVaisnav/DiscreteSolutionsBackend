const Meeting = require('../models/Meeting.js');
const mongoose = require("mongoose")


//NOTE ADDITIONAL PARAMS TO BE PASSED IN REQ



function acceptMeeting(req,res,next)
{
  // do it
  Meeting.find({emailId:req.body.currentEmailId,projectAssociated:req.body.currentProjectName}).exec().then(result=>{
    if (req.body.userType=="Client"){
      if (req.body.approves=="false"){
        result.isApprovedClient=false;
      }
      else{
        result.isApprovedClient=true;
      }
    }
    else{
      if (req.body.approves=="false"){
        result.isApprovedClient=false;
      }
      else{
        result.isApprovedClient=true;
      }
    }
})   
}

module.exports = acceptMeeting;