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
          
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/student">Students Achivement</Nav.Link>
        <NavDropdown title="Acadamic" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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
