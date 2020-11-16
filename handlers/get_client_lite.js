const Client = require('../models/Client.js');
const mongoose = require("mongoose")

function getClientLite(req,res,next)
{
  Client.find({email:req.params.clientEmailId}).select("clientName organisationName").exec()
  .then((docs=>{
    res.status(200).json(docs[0])
  }))
}

module.exports = getClientLite;