const express = require("express");
const bodyParser = require("body-parser"); 
app = express(); 
app.use(bodyParser.urlencoded({extended:true})) ;  // .text , .json  


app.get("/", function (req,res){ 

    res.sendFile(__dirname+"/index.html"); // dirname : the path of the file  

}); 

app.post("/" , function(req,res){

    var num1 = Number(req.body.num1) ; // req.body.num1 : this will get the value entered 
    var num2 = Number(req.body.num2) ; 
    var result = num1 + num2 ; 

    res.send("the result is : " + result) ; 

}); 


app.listen(3000, function(){
    console.log("server running on port 3000"); 
}); 