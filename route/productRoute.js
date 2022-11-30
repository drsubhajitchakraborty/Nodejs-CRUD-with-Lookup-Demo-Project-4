const express= require('express');
const router=express.Router();
const {addProduct}=require('../controller/productController.js');














router.post('/addProduct',addProduct);



module.exports=router;
