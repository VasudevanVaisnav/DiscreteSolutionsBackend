const Project = require('../models/Project.js');
const mongoose = require("mongoose")
function completedProject(req,res,next)
{
  Project.find({isCompleted:true}).exec().select("emailId projectTitle problemStatement completionDate startingDate initialDeadline isApproved isCompleted initialBudget finalBudget report")
  .then(docs=>{
    let response = {
      count: docs.length,
      projects: docs.map(doc=>{
        return {
          count:docs.length,
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

module.exports = completedProject;