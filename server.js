const express = require('express');
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const app=express();


//=========bodyparser middleware for rest api========//
app.use(bodyParser.json({limit:"200000kb",extended:true,parameterlist:2000000*100}));
app.use(bodyParser.urlencoded({limit:"2000kb",extended:true,parameterlist:20000*100}));


//=========database connect========//

    const productionString = "mongodb://localhost:27017";
    mongoose.connect(productionString,function(err){
    if(err){
        console.log("Alert!!! Database Error!! "+err);
    }
    else{
        console.log("Database Sucessfully Connected!!");
    }
    })

//=========port listing===========//

   app.set("PORT",8080);

   app.listen(app.get('PORT'),function(err){
       if(err){
          console.log("Alert!!! Port connection error!! "+err);
       }
       else{
        console.log("Server sucessfully running on the port "+ app.get('PORT'));
       }
   });


//========= Routing ===========//

   const baseRoute=require("./route/baseRoute");
   app.use('/',baseRoute);
