import React from "react";
import './App.css';
import './styleApp.css'
import Footer from "./components/inc/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/inc/Navbar";
import logo from './components/images/banner_logo.png';
import logo2 from './components/images/JIS-small.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (


    <>
      <Router>

        <div className="above-header"></div>

        <div className="logos d-flex ">
          <a href="https://www.nit.ac.in/" target="_blank" rel="noreferrer">
            <img src={logo} alt='Logo' id="nitLogo" />
          </a>
          <a href="https://www.jisgroup.org/" target="_blank" rel="noreferrer">
            <img src={logo2} alt='Logo' id="jisLogo" />
          </a>
        </div>


        {/* this is navber component */}
        <Navbar />
        

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>


        <Footer />

      </Router>
    </>
  );
};

export default App;
