import React from "react";
import { Container, Row, Col } from "reactstrap";

function Contact() {
  return (
    <Container className="themed-container">
      <Row>
        <Col>
          <h3 id="contact-me"> Contact me...</h3>
          <a href="https://github.com/kaitekelly" class="contact">
            Github profile
          </a>
          <br></br>
          <a
            href="https://www.linkedin.com/in/kaite-kelly-2147802a/"
            class="contact"
          >
            LinkedIn profile
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
