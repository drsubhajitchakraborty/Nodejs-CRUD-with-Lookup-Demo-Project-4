const express= require('express');
const router=express.Router();
const createError= require('http-errors');
const constantMessage=require("../helper/constantMessage");
const sucessResponse=require("../helper/sucessResponse");

router.use('/',function(req,res,next){
    if(err){
      // console.log(err);
      // res.send(constantMessage.err);
      next(createError.BadRequest(constantMessage.notFound));
    }
    else{
        // console.log("Welcome to Demo 4!!");
        // res.send("Welcome to Demo 4!!");
        next(sucessResponse(req,data,constantMessage.sucessMessage));

    }
});

const userRoute=require('./userRoute');
router.use('/',userRoute);

const productRoute=require('../route/productRoute');
router.use('/',productRoute);  


module.exports=router;