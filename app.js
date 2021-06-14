const express = require("express");
const bodyParser = require("body-parser"); 
app = express(); 
app.use(bodyParser.urlencoded({extended:true})) ;   
app.use(express.static("Public")) ;  


app.get("/", function (req,res){ 

    res.sendFile(__dirname+"/index.html"); 

}); 

app.post("/" , function(req,res){
    
    res.send("<h1> the result is </h1> " + eval(req.body.screen) ) ;

}); 


app.listen(3000, function(){
    console.log("server running on port 3000"); 
}); 