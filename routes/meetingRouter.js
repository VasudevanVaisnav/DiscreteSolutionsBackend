const express = require('express');
const router = express.Router();
const getall_meeting =require('./../handlers/getall_meeting');
const get_meeting =require('./../handlers/get_meeting');
const schedule_meeting =require('./../handlers/schedule_meeting');
const accept_meeting =require('./../handlers/accept_meeting');

// default
router.get('/',(req,res,next)=>{
  res.status(200).json({routes:["/getAllMeeting","/acceptMeeting/:meetId","/sceduleMeeting/::meetId"]})
});
// get all meeting
router.get('/getAllMeeting/:emailId',getall_meeting);
// get specific meeting
router.get('/getMeeting/:meetId',get_meeting)
// accept meeting
router.patch('/acceptMeeting/:meetId',accept_meeting);
// schedule a meet
router.post('/scheduleMeeting',schedule_meeting);

module.exports = router;
