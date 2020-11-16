const bcrypt = require('bcrypt');
const Client = require('./../models/Client');
function clientEdit(req,res,next)
{
  if(req.body.password!=undefined){
    bcrypt.hash(req.body.password,10,(err,hash)=>{
      if (!err){    
        req.body.password = hash     
        Client.updateOne({emailId:req.params.clientEmailId},req.body,(err,result)=>{
          if(!err)
            next(err)
          res.status(200).json({"msg":"client details updated",result})
        })
      }
    })
  }
}

module.exports = clientEdit;