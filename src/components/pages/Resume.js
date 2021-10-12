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
            href="https://drive.google.com/file/d/1fVm4bnPjv4ollnHLzoNk7qqEhpygaz1N/view"
            target="blank"
          >
            Click for pdf or to print
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
