import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container,NavDropdown} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

    return (
        <div className="header">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to={"./home"}>ToDo List</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"./about"}>About</Nav.Link>
              <Nav.Link as={Link} to={"./contact"}>Contact</Nav.Link> 
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={"./"}>Sign In</Nav.Link>
              <Nav.Link eventKey={2} as={Link} to={"./signup"}>Sign Up</Nav.Link>
            </Nav>
   
          </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
}

export default Header;
