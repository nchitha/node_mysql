const mysql= require("mysql");
const express  =require("express");
const bodyParser = require("body-parser");
const PeopleRoutes = require("./people");
const mysqlConnection = require("./connection");
var app = express();
app.use(bodyParser.json());
app.use("/people",PeopleRoutes);
app.listen(3001);