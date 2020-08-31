import React from "react";

// function NavTabs(props) {
//     return (
//         <ul className="nav navtabs">
//             <li className="nav-item">
//                 <Link to="/" >Home </Link>
//             </li>
//             <li className="nav-item">
//                 <Link to="/about">About</Link>
//             </li>
//             <li className="nav-item">
//                 <Link to="projects">Projects</Link>
//             </li>
//             <li className="nav-item">
//                 <Link to="/resume">Resume</Link>
//             </li>
//             <li className="nav-item">
//                 <Link to="/contact">Contact</Link>
//             </li>
//         </ul>
//     )

// }

// export default NavTabs;

import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavTabs = (props) => {
  return (
    <div>
      <p>Link Based</p>
      <Nav>
        <NavLink href="/">Home</NavLink> <NavLink href="/about">About</NavLink> <NavLink href="#">Projects</NavLink> <NavLink href="/resume">Resume</NavLink> <NavLink href="/contact">Contact</NavLink>
      </Nav>
    </div>
  );
}

export default NavTabs;

// boostrap from react strap 
// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
// } from 'reactstrap';

// const Example = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">reactstrap</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   Option 1
//                 </DropdownItem>
//                 <DropdownItem>
//                   Option 2
//                 </DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>
//                   Reset
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

