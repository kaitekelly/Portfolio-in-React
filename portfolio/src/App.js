import React from 'react';
import './App.css';
// // import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router,
        Switch, 
        Route
     } from "react-router-dom";

// import About from "../src/components/pages/About";
// import Resume from "../src/components/pages/Resume";
// import Contact from "../src/components/pages/Contact";
// import Projects from "../src/components/pages/Projects";
// import NavTabs from './components/NavTabs';
import Footer from "./components/Footer";
// import Gallery from './components/pages/Gallery';
// import Home from "./components/pages/Home";
import Portfolio from './components/PortfolioContainer';



export default function App() {
    return (
        <div>
        <Portfolio />
        <Footer />
        </div>
    )
      
}






