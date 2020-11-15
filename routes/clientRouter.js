const express = require('express');
const router = express.Router();
// const user_login =require('./../handlers/client_login.js');
// const get_user =require('../../handlers/get_user');
// const user_register =require('../../handlers/user_register');

// default
router.get('/',(req,res,next)=>{
  res.status(200).json({routes:["/:userId","/register","/login"]})
});
// fetch user data
// router.get('/:userId',get_user);
// // register
// router.post('/register',user_register);
// // login
// router.post('/login',user_login);

module.exports = router;
