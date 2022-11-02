// var express = require("express");
// var app = express();
var http = require("http");
var stdudent = require("./api.js")
// var port = 3000;

http.createServer((req,res) =>{
    res.writeHead(200,{"Content-type":"application/json"})
    res.write(JSON.stringify(stdudent))
}).listen(5000)