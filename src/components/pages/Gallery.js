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
import EmpDb from "../../assets/employee-database.jpg";
import Gig from "../../assets/find-next-gig.jpg";
import Work from "../../assets/workday-scheduler.jpg";
import Express from "../../assets/express-note-taker-image.jpg";
import Team from "../../assets/team-roster-image.jpg";
import Random from "../../assets/password-generator-color.jpg";
import ReadGen from "../../assets/readme-generator.jpg";
import BookSrch from "../../assets/google-saved-books.png";
import SoundVes from "../../assets/sound-vessel-traffic.png";
import "./style.css";

// src/assets/sound-vessel-traffic.png

function Gallery() {
  // const Button = {
  //   margin: 1,

  // }

  return (
    <div className="gallery-container">
      <Row>
        <Col xs="6" sm="4">
          <Card>
            <CardImg
              top
              width="100%"
              src={SoundVes}
              alt="sound-vessel-traffic"
            />
            <CardBody>
              <CardTitle>Sound Vessel Traffic App</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A CRUD app that allows me to plan boating trips and search for
                large vessels I may encounter while in my pleasure craft.
              </CardText>
              <Button href="https://salty-depths-31986.herokuapp.com/" target="blank">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/Sound-Vessel-Traffic" target="blank">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src={Brewr} alt="Card image cap" />
            <CardBody>
              <CardTitle>brewR App</CardTitle>
              <br></br>
              <CardText>
                An application for craft beer lovers and breweries to search,
                favorite, and blog about craft breweries.
              </CardText>
              <Button href="https://brewrs.herokuapp.com/" target="blank">Site</Button>
              <Button href="https://github.com/JMantis0/brewR" target="blank">Repo</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardImg top width="100%" src={Gig} alt="Card image cap" />
            <CardBody>
              <CardTitle>Find Next Gig App</CardTitle>
              <br></br>
              <CardText>
                Find Next Gig an app to find out the next time a band or artist
                has a gig.
              </CardText>
              <Button href="https://merkraith.github.io/Band-Tour-Manager/" target="blank">
                Site
              </Button>
              <Button href="https://github.com/Merkraith/Band-Tour-Manager" target="blank">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src={BookSrch} alt="google book search" />
            <CardBody>
              <CardTitle>Google Book Search</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A react app using google book search api to search and then save
                books to a mongodb database.
              </CardText>
              <Button href="https://kaites-google-book-search.herokuapp.com/" target="blank">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/Google-Books-Search" target="blank">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src={Weather} alt="Card image cap" />
            <CardBody>
              <CardTitle>Weather Dashboard</CardTitle>
              <br></br>
              <CardText>
                A weather dashboard to tell me the forecast for a city that I
                search.
              </CardText>
              <Button href="https://kaitekelly.github.io/WeatherDashboard/" target="blank">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/WeatherDashboard" target="blank">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src={Work} alt="Card image cap" />
            <CardBody>
              <CardTitle>Workday Scheduler</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A work day scheduler and calendar application.
              </CardText>
              <Button href="https://kaitekelly.github.io/WorkDayScheduler/" target="blank">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/WorkDayScheduler" target="blank">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src={Team} alt="Card image cap" />
            <CardBody>
              <CardTitle>Team Roster</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A personal note taker created with Node and Express.
              </CardText>
              <Button href="https://expresscilnotetaker.herokuapp.com/" target="blank">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/Express-Note-Taker" target="blank">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src={Brgr} alt="Card image cap" />
            <CardBody>
              <CardTitle>Burger Lust Wish List</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                An application where user can enter and delete burgers they
                would like to eat to and from a database.
              </CardText>
              <Button href="https://nameless-fortress-05511.herokuapp.com/" target="blank">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/Burger-Wish" target="blank">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardImg top width="100%" src={Express} alt="Card image cap" />
            <CardBody>
              <CardTitle>Express Note Taker</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A personal note taker created with Node and Express.
              </CardText>
              <Button href="https://expresscilnotetaker.herokuapp.com/" target="blank">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/Express-Note-Taker" target="blank">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      {/* <Row>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src={EmpDb} alt="Card image cap" />
            <CardBody>
              <CardTitle>Employee Database Command Line Application</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A command line interface to generate a team roster with
                individual employee information for team management.
              </CardText>
              <Button href="https://github.com/kaitekelly/CMS-Employee-Database">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/CMS-Employee-Database">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardImg top width="100%" src={Random} alt="Card image cap" />
            <CardBody>
              <CardTitle>Random Number Generator</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A password generator using random numbers and special
                characters.
              </CardText>
              <Button href="https://kaitekelly.github.io/SuperEncryptedPassword/">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/SuperEncryptedPassword">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src={ReadGen} alt="Card image cap" />
            <CardBody>
              <CardTitle>README Generator</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A command line README generator for quick, efficient project
                README's.
              </CardText>
              <Button href="https://kaitekelly.github.io/Efficient-README-Generator/">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/Efficient-README-Generator">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4"></Col>
        <Col sm="4"></Col>
      </Row>
      <br></br>
      {/* ******************************** */}
      {/* <Row>
        <Col sm="4">
          <Card>
            <CardImg top width="100%" src={Random} alt="Card image cap" />
            <CardBody>
              <CardTitle>Random Number Generator</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A password generator using random numbers and special
                characters.
              </CardText>
              <Button href="https://kaitekelly.github.io/SuperEncryptedPassword/">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/SuperEncryptedPassword">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src={ReadGen} alt="Card image cap" />
            <CardBody>
              <CardTitle>README Generator</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A command line README generator for quick, efficient project
                README's.
              </CardText>
              <Button href="https://kaitekelly.github.io/Efficient-README-Generator/">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/Efficient-README-Generator">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4"></Col>
        <Col sm="4"></Col>
      </Row>
      <br></br>
      <Row>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src={Team} alt="Card image cap" />
            <CardBody>
              <CardTitle>Team Roster</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A personal note taker created with Node and Express.
              </CardText>
              <Button href="https://expresscilnotetaker.herokuapp.com/">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/Express-Note-Taker">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src={EmpDb} alt="Card image cap" />
            <CardBody>
              <CardTitle>Employee Database Command Line Application</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A command line interface to generate a team roster with
                individual employee information for team management.
              </CardText>
              <Button href="https://github.com/kaitekelly/CMS-Employee-Database">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/CMS-Employee-Database">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardImg top width="100%" src={Random} alt="Card image cap" />
            <CardBody>
              <CardTitle>Random Number Generator</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A password generator using random numbers and special
                characters.
              </CardText>
              <Button href="https://kaitekelly.github.io/SuperEncryptedPassword/">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/SuperEncryptedPassword">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src={ReadGen} alt="Card image cap" />
            <CardBody>
              <CardTitle>README Generator</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>
                A command line README generator for quick, efficient project
                README's.
              </CardText>
              <Button href="https://kaitekelly.github.io/Efficient-README-Generator/">
                Site
              </Button>
              <Button href="https://github.com/kaitekelly/Efficient-README-Generator">
                Repo
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4"></Col>
        <Col sm="4"></Col>
      </Row> */} 
    </div>
  );
}

export default Gallery;
