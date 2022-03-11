import React, {Component} from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'
import { SiGmail } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from 'react-icons/fa';

 class  Footer extends Component{
     render()
     {
         return(
            <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand>Contact Us</Navbar.Brand>
            <Nav className="me-auto">
              <div className="align-content-end">
              <Nav.Link href="mailto:skcit@gmail.com"><SiGmail className='icon'/>Gmail</Nav.Link>
              <Nav.Link href="https://www.youtube.com/c/SriKaliswariCollegeSivakasi"><AiFillYoutube className="icon"/>Youtube</Nav.Link>
              <Nav.Link href="https://www.facebook.com/SriKaliswariCollegeAutonomous/"><FaFacebookF className="icon"/>Facebook</Nav.Link>
              </div>
            </Nav>
            </Container>
          </Navbar>
         );
     }

 }
export default Footer;