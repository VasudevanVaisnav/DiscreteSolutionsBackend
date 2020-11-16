const Project = require('../models/Project.js');
const mongoose = require('mongoose')

function newProject(req,res,next)
{
  // do it
  // res.status.json({"route":req.hostname+req.url})
  let newproject = new Project({
    _id : new mongoose.Types.ObjectId(),
    emailId: req.body.emailId,
    projectTitle: req.body.projectTitle,
    problemStatement: req.body.problemStatement,
    completionDate: req.body.completionDate,
    startingDate: req.body.startingDate,
    initialDeadline: req.body.initialDeadline,
    isApproved: req.body.isApproved,
    isCompleted:req.body.isCompleted,
    initialBudget:req.body.initialBudget,
    finalBudget:req.body.finalBudget
  })
  newproject.save().then(result=>{
    console.log(result);
    res.status(201).json({"msg":"project created"})
  }).catch(err=>{
    next(err);
  })
}

module.exports = newProject;