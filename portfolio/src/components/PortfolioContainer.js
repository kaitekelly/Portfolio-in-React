import React, { Component } from "react";
// import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Project from "./Project";
// import Header from "./Header";
// import Footer from "./Footer";

class Portfolio extends Component {
    state = {
        currentPage: "Home"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home />;
        } else if (this.state.currentPage === "About") {
            return <About />;
        } else {return <Contact />;
        }
    };

    render() {
      return (
          null
      )
    }

}

export default Portfolio;