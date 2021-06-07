import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import GitHubLogo from "../../assets/GitHub_Logo.png";
import LinkedInLogo from "../../assets/LI-Logo.png";
import "../../components/style.css";


const Contact = () => {
  const copyEmail = () => {
    let currentNode = textAreaRef.current;
    if (document.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(currentNode);
      range.select();
      document.execCommand("copy");
      range.remove();
    } else if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(currentNode);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
    } else {
      alert("Could not select text, Unsupported browser");
    }
  };

  const textAreaRef = useRef(null);

  return (
    <Container className="themed-container">
      <Row>
        <Col>
          <div>
            <button id="contact-me" onClick={copyEmail}>
              <span ref={textAreaRef} value="murphy.kaite@gmail.com">
                murphy.kaite@gmail.com
              </span>
            </button>
          </div>
          <div>
            <small id="email-small">Click email to copy to clipboard!</small>
          </div>
          <div id="githublogo">
            <a href="https://github.com/kaitekelly" className="contact">
              <img src={GitHubLogo} className="gitlogo" alt="GitHub Logo" />
              <br></br>
            </a>
          </div>
          <div className="contact">
            <a href="https://www.linkedin.com/in/kaite-kelly-2147802a/">
              <img
                src={LinkedInLogo}
                className="linkedinlogo"
                alt="LinkedIn Logo"
              />
            </a>
          </div>

          <p className="contact">Based in the Seattle area</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
