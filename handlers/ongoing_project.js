const Project = require('../models/Project.js');
const mongoose = require("mongoose")

function ongoingProject(req,res,next)
{
  Project.find({$and:[{isCompleted:false},{isApproved:true},{emailId:req.params.clientEmailId}]}).select("emailId projectTitle problemStatement completionDate startingDate initialDeadline isApproved isCompleted initialBudget finalBudget")
  .exec().then(doc=>{
    let response = {
      count: docs.length,
      projects: docs.map(doc=>{
        return {
          ...doc
        }
      })
    }
    res.status(200).json({"msg":"all projects fetched successfully",response});
  }).catch(err=>{
    console.log(err);
    res.status(500);
    next(err);
  })
}

module.exports = ongoingProject;