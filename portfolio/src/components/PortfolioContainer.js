import React, { Component } from "react";
// import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./Projects";
// import Header from "./Header";
// import Footer from "./Footer";

class Portfolio extends Component {
    state = {
        Hone: "/",
        About: "about",
        Resume: "resume",
        Contact: "contact",
        Resume: "resume",
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "/") {
            return <Home />;
        } else if (this.state.currentPage === "about") {
            return <About />;
        } else if (this.state.currentPage === "projects") {
            return <Projects />;
        } else if (this.state.currentPage === "resume") {
            return <Resume />;
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