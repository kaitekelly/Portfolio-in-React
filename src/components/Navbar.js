import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar, Brand } from 'react-bootstrap';
import "./style.css";

function Navtab(props) {
  // const location = useLocation();
  return (
    <div>
      <Nav className="nav mr-auto">
        <Nav.Link href="/" className="link">Home</Nav.Link> 
        <Nav.Link href="/gallery" className="link">Projects</Nav.Link>
        <Nav.Link href="/resume" className="link">Resume</Nav.Link> 
        <Nav.Link href="/contact" className="link">Contact</Nav.Link>
      </Nav>
    </div>
  );
}

export default Navtab;
