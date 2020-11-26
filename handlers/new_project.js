const Project = require('../models/Project.js');
const mongoose = require('mongoose')

function newProject(req,res,next)
{
  // do it
  // res.status.json({"route":req.hostname+req.url})
  let startingDate = new Date();
  startingDate.setDate(startingDate.getDate() + ((7-startingDate.getDay())%7+1) % 7);
  console.log(startDate);
  let newproject = new Project({
    _id : new mongoose.Types.ObjectId(),
    emailId: req.body.emailId,
    projectTitle: req.body.projectTitle,
    problemStatement: req.body.problemStatement,
    completionDate: req.body.completionDate,
    startingDate,
    initialDeadline: req.body.initialDeadline,
    isApproved: req.body.isApproved,
    isCompleted:req.body.isCompleted,
    initialBudget:req.body.initialBudget,
    finalBudget:req.body.finalBudget,
    currentDate:req.body.currentDate
  })
  newproject.save().then(result=>{
    console.log(result);
    res.status(201).json({"msg":"project created"})
  }).catch(err=>{
    next(err);
  })
}

module.exports = newProject;