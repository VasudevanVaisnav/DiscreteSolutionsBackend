const Meeting = require('../models/Meeting')

function getMeeting(req,res,next){
  Meeting.findById(req.params.meetId,(err,result)=>{
    if(err) next(err)
    res.status(200).json(result)
  })
}

module.exports = getMeeting