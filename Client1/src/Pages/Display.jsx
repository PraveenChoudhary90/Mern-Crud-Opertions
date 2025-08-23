import { useEffect, useState } from "react";
import BASE_URL from "../Config/Config";
import axios from "axios";
import Table from 'react-bootstrap/Table';




const Display = ()=>{

    const [mydata, setMydata]  =useState([]);

    const LoadData = async()=>{
        const api  =`${BASE_URL}/Student/DisplayData`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }


    useEffect(()=>{
      LoadData();
    },[])

  const DeleteStudent = async(id)=>{
    const api = `${BASE_URL}/Student/DeleteData`;
    try {
      const response = await axios.post(api, {id:id});
      window.alert(response.data.msg);
    } catch (error) {
      console.log(error)
    }
  }


  const UpdateData = async(_id)=>
    {
      console.log(_id);
    const api = `${BASE_URL}/Student/UpdateData`;
    try {
      const response = await axios.post(api, {_id:_id});
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }




let cr = 0;
   const ans = mydata.map((key)=>{
    cr++
    return(
        <>
        <tr>
            <td>{cr}</td>
            <td>
                 <img src={`${BASE_URL}/${key.defaultImage}`} alt="pic" height="100px" width="100px" />
            </td>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>{key.city}</td>
            <td>{key.number}</td>
            <td onClick={()=>{DeleteStudent(key._id)}}>Delete</td>
            <td onClick={()=>{UpdateData(key._id)}} >Update</td>
        </tr>
        </>
    )
   })


    return(
        <>
        <h1> Student Display Page</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
            <th>C Number</th>
          <th>Image</th>
          <th>Rollno</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Number</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        
        </>
    )
}

export default Display;