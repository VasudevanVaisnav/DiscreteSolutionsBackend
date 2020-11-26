const Project = require('../models/Project')

function getProject(req,res,next){
  Project.findById(req.params.projectId,(err,result)=>{
    if(err) next(err)
    res.status(200).json(result)
  })
}

module.exports = getProject