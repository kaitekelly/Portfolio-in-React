import React from "react";
import { Container, Row, Col } from "reactstrap";

function Contact() {

  return (
    <Container className="themed-container">
      <Row>
        <Col>
          <h3 id="contact-me"> Email me at: murphy.kaite@gmail.com</h3>
          <a href="https://github.com/kaitekelly" class="contact">
            Github profile
          </a>
          <br></br>
          <br></br>
          <a
            href="https://www.linkedin.com/in/kaite-kelly-2147802a/"
            class="contact"
          >
            LinkedIn profile
          </a>
          <p class="contact">Based in Seattle, WA</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
