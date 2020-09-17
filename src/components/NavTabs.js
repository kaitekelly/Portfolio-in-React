import React from 'react';
import { Nav, NavLink } from 'reactstrap';

const NavTabs = (props) => {
  return (
    <div>
      <Nav>
        <NavLink href="/home">Home</NavLink> <NavLink href="/about">About</NavLink> <NavLink href="/gallery">Projects</NavLink> <NavLink href="/resume">Resume</NavLink> <NavLink href="/contact">Contact</NavLink>
      </Nav>
    </div>
  );
}

export default NavTabs;
