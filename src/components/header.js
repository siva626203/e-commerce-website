import { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Container,Nav,NavDropdown,Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip} from 'react-bootstrap';
import React, {Component} from 'react';

class  Header extends Component{
     render()
     {
         return(

            <div class="header">
                <h1>DEPARTMENT OF INFORMATION TECHNOLOGY</h1>
                <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Welcome</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
          
        <Nav.Link as={Link} to="/e-commerce-website">Home</Nav.Link>
        <Nav.Link as={Link} to="/faculty">Faculty</Nav.Link>
        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
        <Nav.Link as={Link} to="/department">Department Activities</Nav.Link>
        <NavDropdown title="Achievments" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/staff">Staff achievement</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/student">Students achievement</NavDropdown.Item>
          <Nav.Link as={Link} to="/e-commerce-website">About</Nav.Link>
        </NavDropdown>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

                </div>

                
            
         );
     }

 }
export default Header;
