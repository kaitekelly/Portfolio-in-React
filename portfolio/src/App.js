import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router,
        Switch, 
        Route, 
        Link
     } from "react-router-dom";

import About from "../src/components/pages/About";
import Resume from "../src/components/pages/Resume";
import Contact from "../src/components/pages/Contact";
import Projects from "../src/components/pages/Projects";
// import Home from "../src/components/pages/Home";
// import Header from './components/Header';

// import PortfolioContainer from "./components/PortfolioContainer";
// import NavTabs from './components/NavTabs';
// import Header from "./components/Header";
import Footer from "./components/Footer";



export default function App() {

    return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/home">Home</Link>
                      </li>
                      <li>
                          <Link to="/projects">Projects</Link>
                      </li>

                      <li>
                          <Link to="/about">About</Link>
                      </li>
                      <li>
                          <Link to="/resume">Resume</Link>
                      </li>
                      <li>
                          <Link to="/contact">Contact</Link>
                      </li>
                  </ul>
              </nav>
{/* // can delete stuff above switch if i use navtabs.js add links to navtabs.js*/}
              <Switch>
                  <Route path="/about">
                      <About/>
                  </Route>
                  <Route path="/resume">
                      <Resume />
                  </Route>
                  <Route path="/contact">
                      <Contact />
                  </Route>
                  <Route path="/projects">
                      <Projects />
                  </Route>
              </Switch>
              <Footer />
          </div>
      </Router>
    );
}






