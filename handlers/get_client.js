const Client = require('../models/Client.js');

function getClient(req,res,next)
{
  Client.find({email:req.params.clientEmailId}).select("clientName emailId password phoneNo organisationName").exec()
  .then((docs=>{
    res.status(200).json(docs[0])
  }))
}

module.exports = getClient;