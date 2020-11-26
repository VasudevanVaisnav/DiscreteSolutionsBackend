const { Mongoose } = require('mongoose');
const Meeting = require('../models/Meeting.js');

function scheduleMeeting(req,res,next)
{
    const meet = new Meeting({
        _id : new mongoose.Types.ObjectId(),
        emailId: req.emailId,
        projectAssociated: req.projectName,
        phoneNo: req.phoneNo,
        scheduledDate: req.scheduledDate,
        isApprovedClient: true,
        isApprovedDeveloper:false,
        isCompleted:false,
        agenda: req.agenda,
        meetingLink:req.meetingLink,
        approximateDuration:req.approximateDuration
    })
    meet.save().catch(err => res.send(err)).then(result=>{
        console.log("rmeetRequest");
        return res.status(200).json({"msg":"requested"})
    })
}

module.exports = scheduleMeeting;