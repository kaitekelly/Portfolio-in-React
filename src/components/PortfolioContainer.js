import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "../components/pages/About";
import Resume from "../components/pages/Resume";
import Contact from "../components/pages/Contact";
import Projects from "../components/pages/Projects";
import Navbar from "./Navbar";
import Home from "../components/pages/Home";
import Footer from "./Footer";


class Portfolio extends Component {

    state = {
        currentPage: "Home"
    };

    render() {
        return (
            <Router>
              <div>
              <main>
                <div>
                  <Navbar 
                      currentPage={this.state.currentPage}
                  />
                </div>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/resume" component={Resume} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/projects" component={Projects} />
                  <Route path="/gallery" />
                </main>
                <Footer />
              </div>
            </Router>
          );

    }

}

export default Portfolio;
