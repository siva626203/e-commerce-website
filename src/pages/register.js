import React, { Component } from 'react';
import '../App.css';
import { Form,Button } from 'react-bootstrap';

class Register extends Component{

  render(){
        return(
        <div>
        <Form className="form-r">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group>
  <Form.Label>ReEnter-Password</Form.Label>
    <Form.Control type="password" placeholder="ReEnter-Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Enter OTP</Form.Label>
    <Form.Control type="password" placeholder="otp" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
);
    }
}
export default Register;