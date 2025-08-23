const StudentModel = require("../Model/StuModel");

const InsertData = async(req,res)=>{
    const {name,email,rollno,city,number}  = req.body;
    const ImageUrl = req.files.map(file=>file.path);
    try {
        const Data = await StudentModel.create({
            name:name,
            email:email,
            rollno:rollno,
            city:city,
            number:number,
            defaultImage:ImageUrl[0],
            image:ImageUrl
        })
        res.send({msg:'Student Addedd Succseffully'});
        console.log(Data);
        
    } catch (error) {
        console.log(error)
        
    }
}


const DisplayData = async(req,res)=>{
    const Data = await StudentModel.find();
    console.log(Data);
    res.send(Data);
}


const DeleteData = async(req,res)=>{
    const {id} = req.body;
    try {
        const Data = await StudentModel.findByIdAndDelete(id);
        res.status(200).send({msg:"Student is delete successfully"});
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    InsertData,
    DisplayData,
    DeleteData
}