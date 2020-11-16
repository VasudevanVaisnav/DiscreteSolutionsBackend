const Client = require('../models/Client.js');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose")

function clientEdit(req,res,next)
{
  // do it
  Client.find({emailId:req.body.emailId}).exec().then((result)=>{
    if (result.body.clientName=="null"){
      //nothing
    }
    else{
      result.body.clientName=req.body.clientName
    }
    bcrypt.hash(req.body.password,10,(err,hash)=>{
      if(!err){
        result.body.password=bcrypt.hash
      }
      else{
        console.log(err);
      }
    })
})
}

module.exports = clientEdit;