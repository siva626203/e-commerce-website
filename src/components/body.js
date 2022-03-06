import { Fragment } from "react";
import {Navbar,Card,Container,Nav,NavDropdown,Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip} from 'react-bootstrap';
import React, {Component} from 'react';
import Banner from '../images/1.jpg';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
class Body extends Component{       
render(){
           return (
           
            <Card className="bg-dark text-white">
            <Card.Img src={Banner} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
           )         
              }
          }


export default Body;