const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const StuRoute = require("./Route/StuRoute");
const path = require('path')


app.use(cors());


// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log("DB IS CONNECTED");
})


app.use("/Student",StuRoute);
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is running on ${port} port`);
})



