import React from "react";
// import "../../src";
// import "../../style.css";
import "../../index.css";
import Octocat from "../../assets/Octocat.png";
import "../../components/style.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <p>copyright Kaite Kelly { new Date().getFullYear() } </p> */}
      <a href="https://github.com/kaitekelly" target="_blank" rel="noopener noreferrer">
        <img className="octocat" src={Octocat} alt="Github Octocat Logo" />
      </a>
    </footer>
  );
}

export default Footer;
