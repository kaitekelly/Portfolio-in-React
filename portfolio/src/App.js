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
import NavTabs from './components/NavTabs';
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from './components/pages/Gallery';



export default function App() {

    return (
      <Router>
          <div>
        <div>
            <NavTabs></NavTabs>
        </div>
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
                  <Route path="/gallery">
                    <Gallery />
                  </Route>
              </Switch>
              <Footer />
          </div>
      </Router>
    );
}






