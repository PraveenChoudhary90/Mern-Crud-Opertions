const StudentModel = require("../Model/StuModel");

const InsertData = async(req,res)=>{
    const {name,email,rollno,city,number}  = req.body;
    try {
        const Data = await StudentModel.create({
            name:name,
            email:email,
            rollno:rollno,
            city:city,
            number:number
        })
        res.send({msg:'Student Adedd Succseffully'});
        console.log(Data);
        
    } catch (error) {
        console.log(error)
        
    }
}


module.exports = {
    InsertData
}