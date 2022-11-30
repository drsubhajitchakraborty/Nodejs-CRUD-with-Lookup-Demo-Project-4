const sucessResponse=function(res,data,message){
   
   const response={
        "Sucess":true,
        data,
        message,
    }
    res.send(response);
}

module.exports=sucessResponse;