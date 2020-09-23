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
                I am a graduate of the University of Washington's Full-Stack developer
                certificate program. My past experience includes various roles in 
                the fashion industry including, Digital Media Manager at Nautica, 
                and on the apparel design teams as creative coordinator to the 
                Creative Directors of
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
