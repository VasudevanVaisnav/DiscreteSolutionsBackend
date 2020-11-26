const Client = require('../models/Client.js');
const mongoose = require("mongoose")

function getClientLite(req,res,next)
{
  Client.find({emailId:req.params.clientEmailId}).select("clientName organisationName").exec()
  .then((docs=>{
    if (docs.length==0){
      res.status(201).json({"clientName":"noClientExists"})``
    }
    else{
    res.status(200).json(docs[0])}
  }))
}

module.exports = getClientLite;