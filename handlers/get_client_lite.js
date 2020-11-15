// const Clint = require('../models/Clint.js');

function getClientLite(req,res,next)
{
  // do it
  res.status(202).json({"route":req})
}

module.exports = getClientLite;