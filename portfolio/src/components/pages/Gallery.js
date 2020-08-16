import React, {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "react";
import Wrapper from "../Wrapper";
// import ProjectCard from "../../components/projects/ProjectCard";
// import projects from "../projects/ProjectsArray";
import Brewr from "../../assets/brewr-img.jpg";
import Weather from "../../assets/weather-dashboard.jpg"


function Gallery() {
  return (
    <Card>
    <CardImg top width="100%" src={Brewr} alt="Card image cap" />
    <CardBody>
      <CardTitle>brewR App</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>
      An application for craft beer lovers and breweries to search, favorite, and blog about craft breweries.
      </CardText>
      <Button href="https://brewrs.herokuapp.com/">Site</Button>
      <Button href="https://github.com/JMantis0/brewR">Repo</Button>
     </CardBody>
    </Card>
    <Card>
    <CardImg top width="100%" src={Weather} alt="Card image cap" />
    <CardBody>
      <CardTitle>Weather Dashboard</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>
      A weather dashboard to tell me the forecast for a city that I search.
      </CardText>
      <Button href="https://kaitekelly.github.io/WeatherDashboard/">Site</Button>
      <Button href="https://github.com/kaitekelly/WeatherDashboard">Repo</Button>
     </CardBody>
    </Card>
    <Card>
    <CardImg top width="100%" src={Weather} alt="Card image cap" />
    <CardBody>
      <CardTitle>Find Next Gig App</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>
      Find Next Gig an app to find out the next time a band or artist has a gig.
      </CardText>
      <Button href="https://merkraith.github.io/Band-Tour-Manager/">Site</Button>
      <Button href="https://github.com/Merkraith/Band-Tour-Manager">Repo</Button>
     </CardBody>
    </Card>
    <Card>
    <CardImg top width="100%" src={Weather} alt="Card image cap" />
    <CardBody>
      <CardTitle>Workday Scheduler</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>
      A work day scheduler and calendar application.
      </CardText>
      <Button href="https://kaitekelly.github.io/WorkDayScheduler/">Site</Button>
      <Button href="https://github.com/kaitekelly/WorkDayScheduler">Repo</Button>
     </CardBody>
    </Card>
    <Card>
    <CardImg top width="100%" src={Weather} alt="Card image cap" />
    <CardBody>
      <CardTitle>Burger Lust Wish List</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>
      An application where user can enter and delete burgers they would like to eat to and from a database.
      </CardText>
      <Button href="https://nameless-fortress-05511.herokuapp.com/">Site</Button>
      <Button href="https://github.com/kaitekelly/Burger-Wish">Repo</Button>
     </CardBody>
    </Card>


    </Wrapper>
  );
};

export default Gallery;
