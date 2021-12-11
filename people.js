
const mysql= require("mysql");
const mysqlConnection = require("./connection");
const express  =require("express");

const Router = express.Router();

Router.get("/",(req,res)=>{
    mysqlConnection.query("select * from people",(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
})

module.exports = Router;