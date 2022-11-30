const express= require('express');
const router=express();
const createError=require('http-errors');
const constantMessage=require("../helper/constantMessage");
const userschemas =require("../model/userSchema");
const sucessResponse = require('../helper/sucessResponse');


const addUser=async function(req,res,next)
{
   try{
    var data=req.body;
    const response = new userSchema({
            ...data
        });
    response.save(function(err){
            if(err){
                res.send(createError.NotFound(constantMessage.notFound));
            }  
            else{
                sucessResponse(res,response,"sucess");
            }
        });
    
         
   }
   catch(err){
    res.send(createError.NotFound(constantMessage.notFound));
   }
};

const getAllUser=async function(req,res,next)
{
    try{    
       const response=await userSchema.find().exec();
       sucessResponse(res,response,constantMessage.sucessMessage);
    } 
    catch(err){
      next(createError.NotFound(constantMessage.notFound));
    }
};

const updateUser=async function(req,res,next)
{
    try{
       const response=await userSchema.updateOne({"email" : "subhajit@hghg.com"},{$set:{"email" : "subhajit2222@hghg.com"}}).exec();
       sucessResponse(res,response,constantMessage.sucessMessage);
    }
    catch(err){
        next(createError.NotFound(constantMessage.notFound));
    }
};

const updateUserById=async function(req,res,next)
{
    try{
       const response=await userSchema.updateOne({email:req.body.email},{$set:{name:req.body.name}}).exec();
       sucessResponse(res,response,constantMessage.sucessMessage);
    }
    catch(err){
        next(createError.NotFound(constantMessage.notFound));
    }
};

const delUser=async function(req,res,next)
{
    try{
       const response=await userSchema.deleteOne({email:"subhajit2222@hghg.com"}).exec();
       sucessResponse(res,response,constantMessage.sucessMessage);
    }
    catch(err){
        next(createError.NotFound(constantMessage.notFound));
    }
};

const fetchuserAndProduct=async function (req,res,next)
{
   try{
     const response= await userschemas.aggregate([
        {
          $lookup: {                            /* this section only for join purpose */ 
            from: "productschemas",                          
            localField: "name",
            foreignField: "name",
            as: "product_with_user",
          },
        },
      ]);
    // res.send(response);
      sucessResponse(res,response,constantMessage.sucessMessage);
   }
   catch(err){
    console.log(err);
   }
};

module.exports={addUser,getAllUser,updateUser,updateUserById,delUser,fetchuserAndProduct};