import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router,
        Switch, 
        Route, 
        Link
     } from "react-router-dom";

import About from "../src/components/pages/About";
import Resume from "../src/components/Resume";
import Contact from "../src/components/pages/Contact";

// import PortfolioContainer from "./components/PortfolioContainer";
// import NavTabs from './components/NavTabs';
// import Header from "./components/Header";
// import Footer from "./components/Footer";



export default function App() {
    return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
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

              <Switch>
                  <Route path="/pages/about">
                      <About/>
                  </Route>
                  <Route path="/pages/resumeresume">
                      <Resume />
                  </Route>
                  <Route path="/pages/contactcontact">
                      <Contact />
                  </Route>
              </Switch>
          </div>
      </Router>

    )
}






