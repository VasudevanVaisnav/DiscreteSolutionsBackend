const UNDER_REV= "under review";
const N_APPROVED = "not approved";
const ONGOING = "ongoing";
const COMP = "completed"
const Project = require('../models/Project.js');
const mongoose = require("mongoose")

function getClientLite(req,res,next)
{
  let badgeCount={
    underReview:0,
    notApproved:0,
    ongoing:0
  }
  Project.find({emailId:req.body.emailId}).exec()
  .then(docs=>{
    let response={
      count:docs.length,
      stats:docs.map(doc=>{
        return {
          projectTitle:doc.projectTitle,
          status:doc.isApproved?(isCompleted?COMP:ONGOING):(Date.now()>doc.initialDeadline?N_APPROVED:UNDER_REV)
        }
      })
    };
    res.status(200).json(response);
  })
  .catch((err)=>{
    res.status(500);
  })
}

module.exports = getClientLite;