import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Header/Navbar';
import "./App.css";
import MiddleNavbar from './Components/Home/MiddleNavbar';
import BrowserCard from './Components/Home/BrowserCard';
import MainComponents from './Components/Home/MainComponents';

const App = () => {
  return (
    <Router>
      <Navbar />
      <MiddleNavbar/>
      <BrowserCard/>
      <MainComponents/>
      <Routes>
        {/* Define your routes here */}
        {/* Example: <Route path='/' element={<Home />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
