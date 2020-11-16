const Project = require('../models/Project.js');
const Report = require('../models/Report.js');
const mongoose = require('mongoose')


function addRequirements(req,res,next)
{
  Project.findOne({projectTitle:req.body.projectTitle}).exec()
  .then((err,project)=>{
    if(err || project==null)
      res.status(500).json({"Error":"invalid report details"})
    else
      let startDate = Date.now()
      if(project.reports.length!==0){
        Report.findById(project.reports[project.reports.length-1],(err,report)=>{
          startDate = report.endDate
        })
      }
      let reportId=new mongoose.Types.ObjectId()
      let newreport = new Report({
        _id : reportId,
        requirement:req.body.requirement,
        feedback:req.body.feedback,
        iterationNumber:project.reports.length,
        startDate,
        endDate:{type: Date,required:false},
        rating:{type:Int32,required:true,default:5},
        requirementNo:{type:Int32,required:true},
        projectTitle: {type: String, required: true, unique:true}
      })
      Project.updateOne({projectTitle:req.body.projectTitle},{$push:{reports:reportId}})
      res.status(200).json({"msg":"report submitted",newreport})
  })
}

module.exports = addRequirements;