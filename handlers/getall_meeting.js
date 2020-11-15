// const Meeting = require('../models/Meeting.js');

function getAllMeeting(req,res,next)
{
  // do it
  res.status(200).json({"route":req.hostname+req.url})

}

module.exports = getAllMeeting;