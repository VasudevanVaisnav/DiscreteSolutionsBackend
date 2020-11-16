const Client = require('../models/Client.js');
const mongoose = require("mongoose")

function getClient(req,res,next)
{
  Client.find({emailId:req.params.clientEmailId}).select("clientName emailId password phoneNo organisationName").exec()
  .then((docs=>{
    console.log(req.params.clientEmailId);
    res.status(200).json(docs[0])
  }))
}

module.exports = getClient;