import { Form, Button } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

const Register = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <Icon.FilePerson className="me-2" size={40} />
        <h1>Register</h1>
      </div>
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label className="d-flex">Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="d-flex">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="d-flex">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Register;