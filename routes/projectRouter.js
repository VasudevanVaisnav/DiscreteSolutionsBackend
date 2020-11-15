const express = require('express');
const router = express.Router();
const completed_project =require('./../handlers/completed_project');
const getall_projects =require('./../handlers/getall_projects');
const ongoing_project =require('./../handlers/ongoing_project');
const new_project =require('./../handlers/new_project');

// default
router.get('/',(req,res,next)=>{
  res.status(200).json({routes:["/ongoing","/project","/completed","/new"]})
});
router.get('/ongoing',ongoing_project);
router.get('/project',getall_projects);
router.get('/completed',completed_project);
router.post('/new',new_project);

module.exports = router;