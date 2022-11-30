const createError=require('http-errors');
const constantMessage=require("../helper/constantMessage");
const productSchema =require("../model/productschema");
const sucessResponse = require('../helper/sucessResponse');


const addProduct=async function(req,res,next){
    try{
        const data=req.body;
        const response=new productSchema({
            ...data
        });
        response.save();
        sucessResponse(res,response,constantMessage.sucessMessage);
    }
    catch(err){
        res.send(createError.BadRequest(err));
    }
}

module.exports={addProduct};