
import React from "react";
import { Container } from "reactstrap";
import ReactEmbedGist from 'react-embed-gist';


export default function Resume() {


  return (
    <div className="Resume">
      <Container className="themed-container">
      <ReactEmbedGist gist="kaitekelly/2982da5372b914e9ba9f421808fa1e8f"/>
      <a href="https://docs.google.com/document/d/1srAfcL5tCjcfR3c9VXBsIIeT3fYwDBi85lHKJk6ZMR0/edit?usp=sharing" target="blank" className="resume-pdf">View resume as pdf</a>
      </Container>
    </div>
  );
}
