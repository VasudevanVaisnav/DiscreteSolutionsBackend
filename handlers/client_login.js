// const Clint = require('./../models/Client');
const bcrypt = require('bcrypt');

function clientLogin(req,res,next)
{
  Client.findOne({email:req.body.emailId})
  .exec()
  .then(client =>{
    if(client==null)
    {
      return res.status(401).json({msg:"Auth failed"});
    }
    bcrypt.compare(req.body.password,client.password,(err,result)=>{
      if(err || result==false)
      {
        return res.status(401).json({msg:"Auth failed"});
      }
      return res.status(200).json({msg:"Auth successful"});
    });
  })
  .catch(err=>{
    next(err);
  });
}

module.exports = clientLogin;