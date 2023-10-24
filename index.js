const express = require("express"); //setting up express

const ourApp = express(); //initialize express application

//to define a route or declare it
ourApp.get("/",(request,response)=>{
    response.json({message: "request served!!!!"});  //we sent a response in json format
});

ourApp.listen(4000,()=> console.log("server is running"));  //this function will be executed if we are succesfully listening in the server 4000
