import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Insert =()=>{
    return(
        <>
        <div id="from">
        <h1>Add Student Page</h1>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmailk">
        <Form.Label>Enter Student Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmails">
        <Form.Label>Enter Student Email</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmailj">
        <Form.Label>Enter Student Roll No</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmaild">
        <Form.Label>Enter Student City</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Student Number</Form.Label>
        <Form.Control type="number"  />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Insert;