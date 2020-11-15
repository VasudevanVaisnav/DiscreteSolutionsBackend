// const Clint = require('../models/Clint.js');

function getClient(req,res,next)
{
  // do it
  res.status(200).json({"route":req.hostname+req.url})

}

module.exports = getClient;