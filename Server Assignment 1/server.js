var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.end("Hello From the Server Side");
});
app.get("/home", function(req,res){
    res.end("Hello From the HOME Side");
});
app.get("/about", function(req,res){
    res.end("Hello From the ABOUT Side");
});
app.get("/contact", function(req,res){
    res.end("Hello From the CONTACT Side");
});
app.listen(3000 , () =>{
    console.log("Server Is Running ON Port 3000")
});