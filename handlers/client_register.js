const client = require('../models/Client.js');
const bcrypt = require('bcrypt');

function clientRegister(req,res,next)
{
  client.find({emailId:req.body.emailId}).exec().then((result)=>{
    if (result.length==0){
        bcrypt.hash(req.body.password,10,(err,hash)=>{
            if (!err){
                const data = new client({
                    _id:new mongoose.Types.ObjectId(),
                    clientName:req.body.clientName,
                    emailId:req.body.emailId,
                    password:hash,
                    phoneNo:req.body.phoneNo,
                    organisationName:req.body.organisationName
                })
                data.save().catch(err => res.send(err)).then(result=>{
                    console.log("register");
                    return res.status(200).json({"msg":"registered"})
                })
            }
        })
    }
})
}

module.exports = clientRegister;