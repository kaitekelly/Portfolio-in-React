import React, { useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
// import {CopyToClipboard} from 'react-copy-to-clipboard';
import GitHubLogo from "../../assets/GitHub_Logo_White.png";
import LinkedInLogo from "../../assets/LI-Logo.png"

const Contact = () => {

  const copyEmail = () => {
    let currentNode = textAreaRef.current;
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(currentNode);
        range.select();
        document.execCommand('copy');
        range.remove();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(currentNode);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
    } else {
        alert("Could not select text, Unsupported browser");
    }
}

const textAreaRef = useRef(null);

  return (
    <Container className="themed-container">
      <Row>
        <Col>
        <div>
          <button id="contact-me" onClick={copyEmail}>
          <span
          ref={textAreaRef}
          value='murphy.kaite@gmail.com'>
            murphy.kaite@gmail.com
          </span>
       
            </button>
          {/* {copySuccess} */}

          </div>
          <a href="https://github.com/kaitekelly" class="contact">
           <img src={GitHubLogo} className="gitlogo" alt="GitHub Logo"/>
            <br></br>
          </a>
          <br></br>
          <br></br>
          <a
            href="https://www.linkedin.com/in/kaite-kelly-2147802a/"
            class="contact"
          >
            <img src={LinkedInLogo} className="linkedinlogo" alt="LinkedIn Logo" />
          </a>
          <br></br>
          <br></br>
          <p class="contact">Based in the Seattle area</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
