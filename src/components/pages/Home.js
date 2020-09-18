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
            <Col xs="6">

              <img src={kaitepic} alt="picture of kaite kelly" />
            </Col>
            <Col xs="6">
              <h2 className="kaite-name">Kaite Kelly</h2>
              <p className="bio">
                I am currently enrolled in the University of Washington's coding
                bootcamp certificate program and hope to find a job as a
                developer after completion of the course. Prior to this, I
                worked in various roles in the fashion industry including,
                Digital Media Manager at Nautica, and on the apparel design
                teams as creative coordinator to the Creative Directors of
                Nautica and Tommy Hilfiger.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Home;
