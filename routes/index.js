var express = require('express');
var router = express.Router();
var admin=require('../controller/admincontroller')
/* GET home page. */
const { admindata } = require('node-persist');
router.get('/',admin.get_date);
router.post('/insert',admin.insert);
router.post('/login',admin.login); 
router.get('/logout',admin.logout); 

 


module.exports = router;
