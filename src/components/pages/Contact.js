import React from "react";
import { Container, Row, Col } from "reactstrap";
// import {CopyToClipboard} from 'react-copy-to-clipboard';
import GitHubLogo from "../../assets/GitHub_Logo_White.png";
import LinkedInLogo from "../../assets/LI-Logo.png"

function Contact() {

  return (
    <Container className="themed-container">
      <Row>
        <Col>
          <h3 id="contact-me">murphy.kaite@gmail.com</h3>
          {/* <p>Connect on</p> */}
          <a href="https://github.com/kaitekelly" class="contact">

            <img src={GitHubLogo} className="gitlogo" alt="GitHub Logo"/>
            <br></br>
            {/* Github profile */}
          </a>
          <br></br>
          <br></br>
          <a
            href="https://www.linkedin.com/in/kaite-kelly-2147802a/"
            class="contact"
          >
            <img src={LinkedInLogo} className="linkedinlogo" alt="LinkedIn Logo" />
            {/* LinkedIn profile */}
          </a>
          <br></br>
          <br></br>
          <p class="contact">Based in Seattle, WA</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
