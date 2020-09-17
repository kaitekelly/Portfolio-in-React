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
            <NavTabs></NavTabs>
        </div>
              <Switch>
              <Route path="/Home">
                      <Home/>
                  </Route>
                  <Route path="/About">
                      <About/>
                  </Route>
                  <Route path="/Kathleen_Kelly_Resume_Dev">
                      <Resume />
                  </Route>
                  <Route path="/Contact">
                      <Contact />
                  </Route>
                  <Route path="/projects">
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
