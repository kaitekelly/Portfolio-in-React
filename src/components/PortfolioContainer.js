import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router,
        Switch, 
        Route
     } from "react-router-dom";

import About from "../components/pages/About";
import Resume from "../components/pages/Resume";
import Contact from "../components/pages/Contact";
import Projects from "../components/pages/Projects";
import NavTabs from "../components/NavTabs";
import Gallery from "../components/pages/Gallery";
import Home from "../components/pages/Home";

// import PortfolioContainer from "../components/projects"



export default function Portfolio() {

    return (
      <Router>
          <div>
        <div>

        </div>
              <Switch>
              <Route exact path="/" component={Home}>
                      <Home/>
                  </Route>
                  <Route exact path="/about" component={About}>
                      <About/>
                  </Route>
                  <Route exact path="/resume" component={Resume}>
                      <Resume />
                  </Route>
                  <Route exact path="/contact" component={Contact}>
                      <Contact />
                  </Route>
                  <Route exact path="/projects" component={Projects}>
                      <Projects />
                  </Route>
                  <Route path="/gallery">
                    <Gallery />
                  </Route>
              </Switch>
          </div>
      </Router>
    );
}
