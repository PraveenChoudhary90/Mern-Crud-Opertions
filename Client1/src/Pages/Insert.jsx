import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../Config/Config';
import axios from "axios";
const Insert =()=>{

      const[input,setInput] = useState('');
      const[image, setImage] = useState("");

      const handelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}))
        console.log(input);

      }

      const handelImage = (e)=>{
        setImage(e.target.files);
        console.log(image);
      }

      const handelSubmit =async(e)=>{
        e.preventDefault();
        const api = `${BASE_URL}/Student/InsertData`;
        const fromData = new FormData();
        for(let key in input){
          fromData.append(input, key[input]);
        }

        for(let i = 0; i<image.length;i++){
          fromData.append('image', image[i]);
        }
        
        try {

            const response = await axios.post(api, fromData);
            console.log(response.data);
            alert(response.data.msg);
        } catch (error) {
            console.log(error)
        }
      }


    return(
        <>
        <div id="from">
        <h1>Add Student Page</h1>
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Student Image Url</Form.Label>
        <Form.Control type="file" multiple onChange={handelImage} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Insert;