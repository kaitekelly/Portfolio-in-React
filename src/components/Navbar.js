import React from 'react';
import { Nav } from 'react-bootstrap';
import "./style.css";

function Navtab(props) {
  return (
    <div>
      <Nav className="nav mr-auto nav-update">
        <Nav.Link href="/" className="link">Home</Nav.Link> 
        <Nav.Link href="/gallery" className="link">Projects</Nav.Link>
        <Nav.Link href="/resume" className="link">Resume</Nav.Link> 
        <Nav.Link href="/contact" className="link">Contact</Nav.Link>
      </Nav>
    </div>
  );
}

export default Navtab;
