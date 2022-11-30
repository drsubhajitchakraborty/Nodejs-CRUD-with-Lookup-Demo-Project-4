const express = require('express');
const router = express.Router();
const {addUser,
       getAllUser,
       updateUser,
       updateUserById,
       delUser,
       fetchuserAndProduct} = require('../controller/userController.js');

const basicValidation = require('../validator/basicValidation');














router.post('/addUser',basicValidation,addUser);
router.get('/getAllUser',getAllUser);
router.post('/updateUser',updateUser); 
router.post('/updateUserById',updateUserById)  
router.post('/delUser',delUser);  
router.get('/fetchuserAndProduct',fetchuserAndProduct); 


module.exports=router;