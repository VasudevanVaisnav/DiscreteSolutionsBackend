// const Clint = require('../models/Clint.js');
const bcrypt = require('bcrypt');

function clientEdit(req,res,next)
{
  // do it
  res.status.json({"route":req.hostname+req.url})

}

module.exports = clientEdit;