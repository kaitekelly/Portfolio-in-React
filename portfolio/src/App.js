import React from 'react';
import './App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import NavTabs from './components/NavTabs';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <NavTabs />
            <Header />
            <PortfolioContainer />
            <Footer />
        </div>
    )
}



export default App;
