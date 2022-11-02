const http = require("http");
const mongoose = require("mongoose");
const colors  = require("colors");
const Users = require("./DataBase");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = 5000;
const app = express();

app.use(cors({origin: '*',credentials: true}))
app.use(bodyParser.json());
app.post("/userData" , (req , res ) => {

    const newPerson = Users({
        "stdName" : "Kashan",
        "email" : "kshan@gmail.com",
        "phoneNumber" : "03456276164"
    });
    newPerson.save((err , data) =>{
        if (!err) {     
            console.log(data);
            res.status(200).send({
                message : "User Created",
                data
            })
        }else{
            console.log(err);
            res.status(405).send({
                message : "User Created Failed",
            })
        }
    });

}) .listen(PORT ,  () =>{
    console.log("Server is Running on PORT Number " , PORT);
});