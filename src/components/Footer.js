import React from "react";
// import { Footer } from "react-strap";
import "../index.css";
import "./style.css";




function Footer(props) {

    return (
        
    <footer className="footer">
        <p className="footer__content">copyright Kaite Kelly { new Date().getFullYear() } </p>
    </footer>
    )
}

export default Footer;


// const mystyle = {
//     color: "white",
//     backgroundColor: "DodgerBlue",
//     padding: "10px",
//     fontFamily: "Arial"
//   };
//   return (
//     <div>
//     <h1 style={mystyle}>Hello Style!</h1>
//     <p>Add a little style!</p>
//     </div>
//   );