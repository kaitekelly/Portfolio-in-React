import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col,
  Row,
} from "reactstrap";
import Brewr from "../../assets/brewr-img.jpg";
import Weather from "../../assets/weather-dashboard.jpg";
import Brgr from "../../assets/burger-wish-image.jpg";
import Gig from "../../assets/find-next-gig.jpg";
import Work from "../../assets/workday-scheduler.jpg";
import Express from "../../assets/express-note-taker-image.jpg";
import Team from "../../assets/team-roster-image.jpg";
import BookSrch from "../../assets/google-saved-books.png";
import SoundVes from "../../assets/sound-vessel-traffic.png";
import "./style.css";

function Gallery() {
  const CardTitleStyle = {
    color: "rgb(23, 23, 56)",
    fontSize: "18pt",
    fontWeight: "bold",
  };

  const BtnStyle = {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    // backgroundColor: "#16697a"
  };


  return (
    <div className="gallery-container">
      <Row>
        <Col xs="6" sm="4">
          <Card>
            <br></br>
            <br></br>
            <CardImg width="100%" src={SoundVes} alt="sound-vessel-traffic" />
            <CardBody>
              <CardTitle style={CardTitleStyle}>
                Sound Vessel Traffic App
              </CardTitle>
              <CardText>
                A CRUD app that allows me to plan boating trips and search for
                large vessels I may encounter while in my pleasure craft.
              </CardText>
              <CardText>
                Technologies used: React, Node.js, MySQL, Express, Sequelize, Marine Traffic API
              </CardText>
              <Row>
                <Col>
                  <Button
                    style={BtnStyle}
                    href="https://salty-depths-31986.herokuapp.com/"
                    target="blank"
                  >
                    Site
                  </Button>
                </Col>
                <Col>
                  <Button
                    style={BtnStyle}
                    href="https://github.com/kaitekelly/Sound-Vessel-Traffic"
                    target="blank"
                  >
                    Repo
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4">
          <Card>
            <CardImg width="100%" src={Brewr} alt="Card image cap" />
            <CardBody>
              <CardTitle style={CardTitleStyle}>brewR App</CardTitle>
              <CardText>
                An application for craft beer lovers and breweries to search,
                favorite, and blog about craft breweries.
              </CardText>
              <CardText>
                Technologies used: Node.js, MySQL, Sequelize, Javascript, Brewerdb API
              </CardText>
              <Row>
                <Col>
                  <Button
                    style={BtnStyle}
                    href="https://brewrs.herokuapp.com/"
                    target="blank"
                  >
                    Site
                  </Button>
                </Col>
                <Col>
                  <Button
                    style={BtnStyle}
                    href="https://github.com/JMantis0/brewR"
                    target="blank"
                  >
                    Repo
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardImg width="100%" src={Gig} alt="Card image cap" />
            <CardBody>
              <CardTitle style={CardTitleStyle}>Find Next Gig App</CardTitle>
              <CardText>
                Find Next Gig an app to find out the next time a band or artist
                has a gig.
              </CardText>
              <CardText>
                Technologies used: Javascript, CSS, HTML, Bands in Town API, MapBox API
              </CardText>
              <Row>
                <Col>
                  <Button
                    style={BtnStyle}
                    href="https://merkraith.github.io/Band-Tour-Manager/"
                    target="blank"
                  >
                    Site
                  </Button>
                </Col>
                <Col>
                  <Button
                    style={BtnStyle}
                    href="https://github.com/Merkraith/Band-Tour-Manager"
                    target="blank"
                  >
                    Repo
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs="6" sm="4">
          <Card>
            <CardImg width="100%" src={BookSrch} alt="google book search" />
            <CardBody>
              <CardTitle style={CardTitleStyle}>Google Book Search</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A react app using google book search api to search and then save
                books to a mongodb database.
              </CardText>
              <Row>
                <Col>
                  <Button
                    style={BtnStyle}
                    href="https://kaites-google-book-search.herokuapp.com/"
                    target="blank"
                  >
                    Site
                  </Button>
                </Col>
                <Col>
                  <Button
                    style={BtnStyle}
                    href="https://github.com/kaitekelly/Google-Books-Search"
                    target="blank"
                  >
                    Repo
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4">
          <Card>
            <CardImg width="100%" src={Weather} alt="Card image cap" />
            <CardBody>
              <CardTitle style={CardTitleStyle}>Weather Dashboard</CardTitle>
              <CardText>
                A weather dashboard to return forecast information for any city
                that I search.
              </CardText>
              <Row>
                <Col>
                  <Button
                    style={BtnStyle}
                    href="https://kaitekelly.github.io/WeatherDashboard/"
                    target="blank"
                  >
                    Site
                  </Button>
                </Col>
                <Col>
                  <Button
                    style={BtnStyle}
                    href="https://github.com/kaitekelly/WeatherDashboard"
                    target="blank"
                  >
                    Repo
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        {/* <br></br> */}
        <Col xs="6" sm="4">
          <Card>
            <CardImg width="100%" src={Work} alt="Card image cap" />
            <CardBody>
              <CardTitle style={CardTitleStyle}>Workday Scheduler</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A work day scheduler and calendar application.
              </CardText>
              <Row>
                <Col>
                  <Button
                    style={BtnStyle}
                    href="https://kaitekelly.github.io/WorkDayScheduler/"
                    target="blank"
                  >
                    Site
                  </Button>
                </Col>
                <Col>
                  <Button
                    style={BtnStyle}
                    href="https://github.com/kaitekelly/WorkDayScheduler"
                    target="blank"
                  >
                    Repo
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Row />
        <br></br>
        <Row>
          <Col xs="6" sm="4">
            <Card>
              <CardImg width="100%" src={Team} alt="Card image cap" />
              <CardBody>
                <CardTitle style={CardTitleStyle}>Team Roster</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>
                  A Node application for department managers to generate a team
                  roster through the command line.
                </CardText>
                <Row>
                  <Col>
                    <Button
                      style={BtnStyle}
                      href="https://drive.google.com/file/d/1pLqcsBdVXPKg74XMLM74FPH-fgR8WeFq/view"
                      target="blank"
                    >
                      Video of App in use
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      style={BtnStyle}
                      href="https://github.com/kaitekelly/CLI-Template-Engine-Team-Roster"
                      target="blank"
                    >
                      Repo
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="6" sm="4">
            <Card>
              <CardImg width="100%" src={Brgr} alt="Card image cap" />
              <CardBody>
                <CardTitle style={CardTitleStyle}>
                  Burger Lust Wish List
                </CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>
                  An application where user can enter and delete burgers they
                  would like to eat to a database.
                </CardText>
                <Row>
                  <Col>
                    <Button
                      style={BtnStyle}
                      href="https://nameless-fortress-05511.herokuapp.com/"
                      target="blank"
                    >
                      Site
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      style={BtnStyle}
                      href="https://github.com/kaitekelly/Burger-Wish"
                      target="blank"
                    >
                      Repo
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg width="100%" src={Express} alt="Card image cap" />
              <br></br>
              <CardBody>
                <CardTitle style={CardTitleStyle}>Express Note Taker</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>
                  A personal note taker created with Node and Express.
                </CardText>
                <Row>
                  <Col>
                    <Button
                      style={BtnStyle}
                      href="https://expresscilnotetaker.herokuapp.com/"
                      target="blank"
                    >
                      Site
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      style={BtnStyle}
                      href="https://github.com/kaitekelly/Express-Note-Taker"
                      target="blank"
                    >
                      Repo
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Row>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Gallery;
