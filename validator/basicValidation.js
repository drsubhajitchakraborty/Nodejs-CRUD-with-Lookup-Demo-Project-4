const createError=require('http-errors');
const constantMessage=require("../helper/constantMessage");

const basicValidation=async function(req,res,next)
{
 try{
       if(req.body.email && req.body.name) {
            next();
       }
       else{
          res.send(createError.BadRequest(constantMessage.emailIsRequired));
         // res.send(createError.BadRequest(constantMessage.nameIsRequired))
       }
 }
 catch(err){
        res.send(createError.BadRequest(err));
 }
}


module.exports = basicValidation;