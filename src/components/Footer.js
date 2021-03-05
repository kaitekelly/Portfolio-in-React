import React from "react";
import "../index.css";
import Octocat from './Octocat.png';

function Footer(props) {

    return (
        
    <footer className="footer">
        {/* <p>copyright Kaite Kelly { new Date().getFullYear() } </p> */}
        <a href="https://github.com/kaitekelly" target="_blank">
        <img className="octocat" src={Octocat} alt="Github Octocat Logo" />
        </a>
    </footer>
    )
}

export default Footer;

