const express  =require("express");
const route= express.Router();
const StuController  =require("../Controller/StuController");

route.post("/InsertData", StuController.InsertData);







module.exports = route;