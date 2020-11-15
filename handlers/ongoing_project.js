// const Project = require('../models/Project.js');

function ongoingProject(req,res,next)
{
  // do it
  res.status(200).json({"route":req.hostname+req.url})
}

module.exports = ongoingProject;