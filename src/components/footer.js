import { Fragment } from "react";
import React, {Component} from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'
 class  Footer extends Component{
     render()
     {
         return(
            <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand>Contact</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">skcit@gmail.com</Nav.Link>
              <Nav.Link href="#features">Youtube</Nav.Link>
              <Nav.Link href="#pricing">Facebook</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
         );
     }

 }
export default Footer;