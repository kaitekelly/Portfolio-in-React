
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import CardBtn from "./CardBtn";
import { projects } from "../projects/ProjectsArray";

const ProjectCard = ({ project, title, text, siteurl, repourl }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle
          title={project.title}
          >Card title{project.title} </CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText 
          text={project.text}
          >{project.text}Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button
          siteurl={project.siteurl}
          >Button{project.siteurl}
          </Button
          >
          <Button
          repourl={project.repourl}
          >Button{project.repourl}</Button>
          <CardBtn></CardBtn>

        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard;


