import React from "react";
import { Container, Row, Col } from "reactstrap";
import kaitepic from "./IMG_0414_a.jpeg";


import "./style.css";

function Home() {

  return (
    <div>
      <Container className="themed-container">
        <div>
          <Row>
            <Col s="6">

              <img src={kaitepic} alt="picture of kaite kelly" />
            </Col>
            <Col s="6">
              <h2 className="kaite-name">Kaite Kelly</h2>
              <p className="bio">
              Creative, collaborative and detail oriented Full Stack Web Developer with a passion 
              for integrating technologies to solve problems and improve upon existing 
              methods. Experience leveraging background in digital marketing and fashion design
              to provide unique perspectives on how end-users interact with web applications. ​
              Excellent interpersonal communication skills and collaborator who works well on 
              team-based projects as well as independently. 
              </p>
            </Col>
          </Row>
          <Row className="tech-skills">
            <Col s="8">
            <h3>Technical Skills</h3>
            <ul>
            <li>Web Technologies: React.js, JavaScript, HTML, CSS, APIs, JSON, RESTful API’s </li>
            <li> Back End: Node.js, Express, MongoDB, MySQL, Sequel</li>
            <li> Project Tools: GIT, Github, Visual Studio Code, npm, Command Line</li>
            </ul>

            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Home;
