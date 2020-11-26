const express = require('express');
const router = express.Router();
const client_login =require('./../handlers/client_login');
const get_client =require('./../handlers/get_client');
const client_register =require('./../handlers/client_register');
const get_client_lite = require('./../handlers/get_client_lite')
const client_edit = require('./../handlers/client_edit')

// default
router.get('/',(req,res,next)=>{res.status(200).json({routes:["/:userId","/register","/login"]})});
// fetch user data
router.get('/info/:clientEmailId',get_client);
// fetch client data lite
router.get('/info/lite/:clientEmailId',get_client_lite);
// register
router.post('/register',client_register);
// login
router.post('/login',client_login);
// update client info
router.patch('/edit/:clientEmailId',client_edit);

module.exports = router;
