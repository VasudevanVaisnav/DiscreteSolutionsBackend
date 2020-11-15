// const Project = require('../models/Project.js');

function newProject(req,res,next)
{
  // do it
  res.status.json({"route":req.hostname+req.url})

}

module.exports = newProject;