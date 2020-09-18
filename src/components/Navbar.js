import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar, Brand } from 'react-bootstrap';
import { NavItem } from 'reactstrap';

function Navtab(props) {
  const location = useLocation();
  return (
    <div>
    {/* <Navbar> */}
      <Nav className="nav mr-auto">
        <Nav.Link href="/">Home</Nav.Link> 
        {/* <Link to="/about">About</Link>  */}
        <Nav.Link href="/gallery">Projects</Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link> 
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      {/* </Navbar> */}
    </div>
  );
}

export default Navtab;

{/* <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>  */}