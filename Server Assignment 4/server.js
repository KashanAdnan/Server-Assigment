const express = require("express");
const fs = require("fs");
const http = require("http");
const color = require("colors");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const {signupmodel} = require("./signupdatabase");
const PORT = 5000;


app.use(cors({ origin: '*', credentials: true}))
app.use(bodyParser.json())
app.post("/signup" , (req , res , next) =>{

    if (!req.body.UserName
        || !req.body.Password
        || !req.body.Email
        || !req.body.Age
        || !req.body.BirthDate) {
        res.status(405).send(`
        please send complete information
        e.g:
        {
            "UserName" : "xyz",
            "Password" : "xyz",
            "Email" : "xyz@gmail.com",
            "Age" : "12",
            "BirthDate" : "xyz"
        }`);
        return
    };

    signupmodel.findOne({Email : req.body.Email}, (err,data) =>{
        if (err || data) {
            res.status(405).send({
                message : "Make Another Account !"
                // err
            })
        }else{

        
            const newUser = new signupmodel({
                "UserName" : req.body.UserName,
                "Password" : req.body.Password,
                "Email" : req.body.Email,
                "Age" : req.body.Age,
                "BirthDate" : req.body.BirthDate
            });
            newUser.save((err , data) =>{
                if (!err) {
                    console.log(data);
                    res.status(200).send({
                        message : "New User Created",
                        data
                    });
                }else{
                    console.log(err);
                    res.status(500).send({
                        message : "User Created Failed"
                    })
                }
            })
            
        }
    })



       
});

app.listen(PORT , () =>{
    console.log("Server is Running On " , PORT);
});


app.post("/login" , (req,res,next) =>{
    signupmodel.findOne({Email : req.body.Email,Password : req.body.Password } , (err,data) =>{
        if (!err || !data) {
            res.status(405).send({
                message : "User Not Exist !"
            });
        }else{            
            const newUser = new signupmodel({
                "Email" : req.body.Email,
                "Password" : req.body.Password
            });
            newUser.save((err , data) =>{
                if (!err) {
                    console.log(data);
                    res.status(200).send({
                        message : "New User Created",
                        data
                    });
                }else{
                    console.log(err);
                    res.status(500).send({
                        message : "User Created Failed"
                    })
                }
            })
            
        }
    })
});