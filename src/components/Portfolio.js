import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Footer from "./Footer";
import Gallery from "./pages/Gallery";

const Portfolio = () => {
  // state = {
  //   currentPage: "Home",
  // };

  return (
    <Router>
      <div>
        <main>
          <div>
            <Navbar />
          </div>
          <div class="nav-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/gallery" component={Gallery} />
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default Portfolio;
