import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import "./style.css";

const Navbar = ({ name }) => {
  return (
    <nav className="navbar mr-auto nav-update">
      <h1>
        {name}
      </h1>
    <div>
      <ul>
        <li>
        <Link to="/" className="link">Home</Link> 
        </li>
        <li>
        <Link to="/gallery" className="link">Projects</Link>
        </li>
        <li>
        <Link to="/resume" className="link">Resume</Link> 
        </li>
        <li>
        <Link to="/contact" className="link">Contact</Link>
        </li>
        </ul>
    </div>
    </nav>
  );
}

Navbar.defaultProps = {
  name: 'Kaite Kelly'
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired
}

export default Navbar;
