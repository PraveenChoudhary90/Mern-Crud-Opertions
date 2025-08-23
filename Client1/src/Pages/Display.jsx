import { useEffect, useState } from "react";
import BASE_URL from "../Config/Config";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';





const Display = ()=>{

    const [mydata, setMydata]  =useState([]);
    const [input, setInput]  =useState({});
     
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const LoadData = async()=>{
        const api  =`${BASE_URL}/Student/DisplayData`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }


    useEffect(()=>{
      LoadData();
    },[])

   const  handelInput = (e)=>{
      const name= e.target.name;
      const value = e.target.value;
      setInput(values=>({...values, [name]:value}));
      console.log(input);
   }


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
      setShow(true)
      console.log(_id);
    const api = `${BASE_URL}/Student/UpdateData`;
    try {
      const response = await axios.post(api, {_id:_id});
      console.log(response.data);
      setInput(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  const handelUpdateSubmit = async(_id)=>{
    const api = `${BASE_URL}/Student/Updatefromdata`;
    try {
      const response = await axios.post(api, {_id:_id})
      alert(response.data.msg);
      setShow(false);
    } catch (error) {
      console.log(error)
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
        

       

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Student Model</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div id="from">
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmailk">
        <Form.Label>Enter Student Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmails">
        <Form.Label>Enter Student Email</Form.Label>
        <Form.Control type="text"  name='email' value={input.email} onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmailj">
        <Form.Label>Enter Student Roll No</Form.Label>
        <Form.Control type="text" name='rollno' value={input.rollno} onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmaild">
        <Form.Label>Enter Student City</Form.Label>
        <Form.Control type="text" name='city' value={input.city} onChange={handelInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Student Contact Number</Form.Label>
        <Form.Control type="number" name='number' value={input.number} onChange={handelInput} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handelUpdateSubmit}>
        Submit
      </Button>
    </Form>
    </div>
          
          </Modal.Body>
      </Modal>

        </>
    )
}

export default Display;