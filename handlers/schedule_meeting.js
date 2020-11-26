const mongoose = require('mongoose');
const Meeting = require('../models/Meeting.js');

function scheduleMeeting(req,res,next)
{
    const meet = new Meeting({
        _id : new mongoose.Types.ObjectId(),
        emailId: req.body.emailId,
        projectAssociated: req.body.projectName,
        phoneNo: req.body.phoneNo,
        scheduledDate: req.body.scheduledDate,
        isApprovedClient: true,
        isApprovedDeveloper:false,
        isCompleted:false,
        agenda: req.body.agenda,
        meetingLink:req.body.meetingLink,
        approximateDuration:req.body.approximateDuration
    })
    meet.save().catch(err => res.send(err)).then(result=>{
        console.log("rmeetRequest");
        return res.status(200).json({"msg":"requested"})
    })
}

module.exports = scheduleMeeting;