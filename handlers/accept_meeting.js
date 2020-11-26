const Meeting = require('../models/Meeting.js');
const mongoose = require("mongoose")


//NOTE ADDITIONAL PARAMS TO BE PASSED IN REQ



function acceptMeeting(req,res,next)
{
  // do it
//   Meeting.find({emailId:req.body.currentEmailId,projectAssociated:req.body.currentProjectName}).exec().then(result=>{
//     if (req.body.userType=="Client"){
//       if (req.body.approves=="false"){
//         result.isApprovedClient=false;
//       }
//       else{
//         result.isApprovedClient=true;
//       }
//     }
//     else{
//       if (req.body.approves=="false"){
//         result.isApprovedClient=false;
//       }
//       else{
//         result.isApprovedClient=true;
//       }
//     }
// })   
  
  Meeting.findByIdAndUpdate(req.params.meetId,{isApprovedDeveloper:true,isApprovedClient:true},function(err,result){
    if(err)
      next(err)
    else
      res.status(200).json({"msg":"meeting is approved"})
  })
}

module.exports = acceptMeeting;