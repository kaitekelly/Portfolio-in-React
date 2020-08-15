import React from "react";

function NavTabs(props) {
    return (
        <ul className="nav navtabs">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => props.handlePageChange("Home")}
                className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                >
                Home
              </a>
            </li>
            <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => props.handlePageChange("About")}
                  className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
                  >
                  About
                </a>
            </li>
            <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => props.handlePageChange("Contact")}
                  className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
                >
                Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                  href="#resume"
                  onClick={() => props.handlePageChange("Resume" ? "nav-link active" : "nav-link")}
                >
                    Resume
                </a>
            </li>
        </ul>
    )

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

