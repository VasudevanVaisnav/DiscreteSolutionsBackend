const client = require('./../models/Client');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose")

function clientLogin(req,res,next)
{
  client.find({emailId:req.body.emailId}).exec().then(result=>{
      console.log("login");
    console.log(result);
    if (result.length==1){
        bcrypt.compare(req.body.password,result[0].password,(err,verdict)=>{
            if (!err && verdict==true){
                res.status(200).json({"msg":"success"})
            }
            else if(!err){
                res.status(201).json({"msg":"invalid password"})
            }
            else{
                res.status(202).json({"msg":"incorrect password"})
            }
        })
    }
    else{
        return res.status(203).json({"msg":"no such client found"})
    }        
})
}

module.exports = clientLogin;