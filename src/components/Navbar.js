import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Navbar = (props) => {
  return (
    <div>
      <Nav className="nav">
        <Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/gallery">Projects</Link> <Link to="/resume">Resume</Link> <Link to="/contact">Contact</Link>
      </Nav>
    </div>
  );
}

export default Navbar;
