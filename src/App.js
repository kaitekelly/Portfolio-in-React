import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Gallery from "./components/pages/Gallery";
import "../src/components/style.css";
// import "./App.css";

const App =() => {
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
}

export default App;
