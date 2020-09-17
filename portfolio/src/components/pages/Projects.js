import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col, Container
} from "reactstrap";
import Brewr from "../../assets/brewr-img.jpg";
import Weather from "../../assets/weather-dashboard.jpg";
import Brgr from "../../assets/burger-wish-image.jpg";
import EmpDb from "../../assets/employee-database.jpg";
import Gig from "../../assets/find-next-gig.jpg";
import Work from "../../assets/workday-scheduler.jpg";
import Express from "../../assets/express-note-taker-image.jpg";
import Team from "../../assets/team-roster-image.jpg";
import Random from "../../assets/password-generator-color.jpg";
import ReadGen from "../../assets/readme-generator.jpg";
import "../../index.css";


function Projects() {

  return (
    <div>
    <Container className="projects-container">
      <h1>Here's the projects page</h1>
      <div>
        <Row>
          <Col xs="6" sm="4">
            <Card class="d-flex justify-content-center">
              <CardImg top width="100%" src={Brewr} alt="Card image cap" />
              <CardBody>
              <div className="d-flex justify-content-center">
                <CardTitle className="card-title justify-content-center">brewR App</CardTitle>
                <br></br>
                <CardText>
                  An application for craft beer lovers and breweries to search,
                  favorite, and blog about craft breweries.
                </CardText>
                <Button href="https://brewrs.herokuapp.com/" target="_blank" className="button">
                  Site
                </Button>
                <Button
                  href="https://github.com/JMantis0/brewR"
                  target="_blank"
                >
                  Repo
                </Button>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src={Weather} alt="Card image cap" />
              <CardBody>
                <CardTitle>Weather Dashboard</CardTitle>
                <br></br>
                <CardText>
                  A weather dashboard to tell me the forecast for a city that I
                  search.
                </CardText>
                <Button
                  href="https://kaitekelly.github.io/WeatherDashboard/"
                  target="_blank"
                >
                  Site
                </Button>
                <Button
                  href="https://github.com/kaitekelly/WeatherDashboard"
                  target="_blank"
                >
                  Repo
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Card>
          <CardImg top width="100%" src={Gig} alt="Card image cap" />
          <CardBody>
            <CardTitle>Find Next Gig App</CardTitle>
            <br></br>
            <CardText>
              Find Next Gig an app to find out the next time a band or artist
              has a gig.
            </CardText>
            <Button
              href="https://merkraith.github.io/Band-Tour-Manager/"
              target="_blank"
            >
              Site
            </Button>
            <Button
              href="https://github.com/Merkraith/Band-Tour-Manager"
              target="_blank"
            >
              Repo
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Work} alt="Card image cap" />
          <CardBody>
            <CardTitle>Workday Scheduler</CardTitle>
            <br></br>

            <CardText>A work day scheduler and calendar application.</CardText>
            <Button
              href="https://kaitekelly.github.io/WorkDayScheduler/"
              target="_blank"
            >
              Site
            </Button>
            <Button
              href="https://github.com/kaitekelly/WorkDayScheduler"
              target="_blank"
            >
              Repo
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Brgr} alt="Card image cap" />
          <CardBody>
            <CardTitle>Burger Lust Wish List</CardTitle>
            <br></br>
            <CardText>
              An application where user can enter and delete burgers they would
              like to eat to and from a database.
            </CardText>
            <Button
              href="https://nameless-fortress-05511.herokuapp.com/"
              target="_blank"
            >
              Site
            </Button>
            <Button
              href="https://github.com/kaitekelly/Burger-Wish"
              target="_blank"
            >
              Repo
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Express} alt="Card image cap" />
          <CardBody>
            <CardTitle>Express Note Taker</CardTitle>
            <br></br>
            <CardText>
              A personal note taker created with Node and Express.
            </CardText>
            <Button
              href="https://expresscilnotetaker.herokuapp.com/"
              target="_blank"
            >
              Site
            </Button>
            <Button
              href="https://github.com/kaitekelly/Express-Note-Taker"
              target="_blank"
            >
              Repo
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Team} alt="Card image cap" />
          <CardBody>
            <CardTitle>Team Roster</CardTitle>
            <br></br>
            <CardText>
              A personal note taker created with Node and Express.
            </CardText>
            <Button
              href="https://expresscilnotetaker.herokuapp.com/"
              target="_blank"
            >
              Site
            </Button>
            <Button
              href="https://github.com/kaitekelly/Express-Note-Taker"
              target="_blank"
            >
              Repo
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={EmpDb} alt="Card image cap" />
          <CardBody>
            <CardTitle>Employee Database Command Line Application</CardTitle>
            <br></br>
            <CardText>
              A command line interface to generate a team roster with individual
              employee information for team management.
            </CardText>
            <Button
              href="https://github.com/kaitekelly/CMS-Employee-Database"
              target="_blank"
            >
              Site
            </Button>
            <Button
              href="https://github.com/kaitekelly/CMS-Employee-Database"
              target="_blank"
            >
              Repo
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Random} alt="Card image cap" />
          <CardBody>
            <CardTitle>Random Number Generator</CardTitle>
            <br></br>
            <CardText>
              A password generator using random numbers and special characters.
            </CardText>
            <Button
              href="https://kaitekelly.github.io/SuperEncryptedPassword/"
              target="_blank"
            >
              Site
            </Button>
            <Button
              href="https://github.com/kaitekelly/SuperEncryptedPassword"
              target="_blank"
            >
              Repo
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={ReadGen} alt="Card image cap" />
          <CardBody>
            <CardTitle>README Generator</CardTitle>
            <br></br>
            <CardText>
              A command line README generator for quick, efficient project
              README's.
            </CardText>
            <Button
              href="https://kaitekelly.github.io/Efficient-README-Generator/"
              target="_blank"
            >
              Site
            </Button>
            <Button
              href="https://github.com/kaitekelly/Efficient-README-Generator"
              target="_blank"
            >
              Repo
            </Button>
          </CardBody>
        </Card>
      </div>
      </Container>
    </div>
  );
}

export default Projects;
