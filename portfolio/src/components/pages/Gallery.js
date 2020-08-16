import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
// import Wrapper from "../Wrapper";
// import ProjectCard from "../../components/projects/ProjectCard";
// import projects from "../projects/ProjectsArray";
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



function Gallery()  {
  
    return(
      <div>
    
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
      <CardImg top width="100%" src={Gig} alt="Card image cap" />
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
      <CardImg top width="100%" src={Work} alt="Card image cap" />
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
      <CardImg top width="100%" src={Brgr} alt="Card image cap" />
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
      <Card>
      <CardImg top width="100%" src={Express} alt="Card image cap" />
      <CardBody>
        <CardTitle>Express Note Taker</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
        A personal note taker created with Node and Express.
        </CardText>
        <Button href="https://expresscilnotetaker.herokuapp.com/">Site</Button>
        <Button href="https://github.com/kaitekelly/Express-Note-Taker">Repo</Button>
       </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src={Team} alt="Card image cap" />
      <CardBody>
        <CardTitle>Team Roster</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
        A personal note taker created with Node and Express.
        </CardText>
        <Button href="https://expresscilnotetaker.herokuapp.com/">Site</Button>
        <Button href="https://github.com/kaitekelly/Express-Note-Taker">Repo</Button>
       </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src={EmpDb} alt="Card image cap" />
      <CardBody>
        <CardTitle>Employee Database Command Line Application</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
        A command line interface to generate a team roster with individual employee information for team management.
        </CardText>
        <Button href="https://github.com/kaitekelly/CMS-Employee-Database">Site</Button>
        <Button href="https://github.com/kaitekelly/CMS-Employee-Database">Repo</Button>
       </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src={Random} alt="Card image cap" />
      <CardBody>
        <CardTitle>Random Number Generator</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
        A password generator using random numbers and special characters.
        </CardText>
        <Button href="https://kaitekelly.github.io/SuperEncryptedPassword/">Site</Button>
        <Button href="https://github.com/kaitekelly/SuperEncryptedPassword">Repo</Button>
       </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src={ReadGen} alt="Card image cap" />
      <CardBody>
        <CardTitle>README Generator</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
        A command line README generator for quick, efficient project README's.
        </CardText>
        <Button href="https://kaitekelly.github.io/Efficient-README-Generator/">Site</Button>
        <Button href="https://github.com/kaitekelly/Efficient-README-Generator">Repo</Button>
       </CardBody>
      </Card>
      
      </div>
    )

  
  
  
};

export default Gallery;
