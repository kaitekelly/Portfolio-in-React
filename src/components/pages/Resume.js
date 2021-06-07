import React from "react";
import { Container } from "reactstrap";
import ReactEmbedGist from "react-embed-gist";
import "../../components/style.css";

const Resume = () => {
  return (
    <div>
      <Container className="themed-container">
        <div>
          <ReactEmbedGist gist="kaitekelly/2982da5372b914e9ba9f421808fa1e8f" />
          <a
            href="https://docs.google.com/document/d/1srAfcL5tCjcfR3c9VXBsIIeT3fYwDBi85lHKJk6ZMR0/edit?usp=sharing"
            target="blank"
          >
            Click for pdf or print
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
