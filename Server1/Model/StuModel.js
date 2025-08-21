const mongoose  =require("mongoose");
const StuSchema = new mongoose.Schema({
    name:String,
    email:String,
    rollno:String,
    city:String,
    number:Number,
    defaultImage:String,
    image:[String]
}) 


module.exports = mongoose.model("StudentPr", StuSchema);