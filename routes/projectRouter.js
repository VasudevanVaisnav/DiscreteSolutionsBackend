const express = require('express');
const router = express.Router();
const completed_project =require('./../handlers/completed_project');
const getall_projects =require('./../handlers/getall_projects');
const get_project = require('./../handlers/get_project');
const ongoing_project =require('./../handlers/ongoing_project');
const new_project =require('./../handlers/new_project');
const getevents =require('./../handlers/getevents');

// default
router.get('/',(req,res,next)=>{
  res.status(200).json({routes:["/ongoing","/project","/completed","/new"]})
});
router.get('/ongoing/:clientEmailId',ongoing_project);
router.get('/getAllProject/:clientEmailId',getall_projects);
router.get('/getProject/:projectId',get_project);
router.patch('/completed',completed_project);
router.post('/new',new_project);
router.get('/getevents/:clientEmailId',getevents)
// reports
router.post('/report/')

module.exports = router;
