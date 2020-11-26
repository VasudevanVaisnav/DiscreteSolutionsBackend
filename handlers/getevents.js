const UNDER_REV= "under review";
// const N_APPROVED = "not approved";
// const ONGOING = "ongoing";
// const COMP = "completed"
const Project = require('../models/Project.js');
const Meeting = require('../models/Meeting.js');
const mongoose = require("mongoose")

function getClientLite(req,res,next)
{
  // let badgeCount={
  //   "under review":0,
  //   "not approved":0,
  //   "ongoing":0,
  //   "completed":0
  // }

  Project.find({$and:[{emailId:req.params.clientEmailId},{isApproved:false}]}).exec()
  .then(docs=>{
    let response={
      count:docs.length,
      projects:docs.map(doc=>doc.projectTitle),
        // status = doc.isApproved?(doc.isCompleted?COMP:ONGOING):(Date.now()>doc.initialDeadline?N_APPROVED:UNDER_REV)
        // badgeCount[status]++
      // badgeCount
    };
    // get all unApprovedMeetings under this client
    Meeting.find( {$and:[ {emailId:req.params.clientEmailId} ,{$or:[ {isApprovedDeveloper:false} ,{isApprovedClient:false} ]} ]}).exec()
    .then(
      meets=>{
        response={
          ...response,
          meetings:meets.map(meet=>meet.agenda)
        }
        res.status(200).json(response);
      }
    )
  })
  .catch((err)=>{
    res.status(500);
  })
}

module.exports = getClientLite;