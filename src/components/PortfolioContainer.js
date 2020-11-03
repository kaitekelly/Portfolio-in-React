import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from "../components/pages/Resume";
import Contact from "../components/pages/Contact";
import Navbar from "./Navbar";
import Home from "../components/pages/Home";
import Footer from "./Footer";
import Gallery from "./pages/Gallery";

class Portfolio extends Component {
  state = {
    currentPage: "Home",
  };

  render() {
    return (
      <Router>
        <div>
          <main>
            <div>
              <Navbar currentPage={this.state.currentPage} />
            </div>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/gallery" component={Gallery} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Portfolio;
