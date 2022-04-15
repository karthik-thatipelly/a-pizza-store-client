import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Customize from './components/Customize';
import Checkout from './components/Checkout';
import Authentication from './components/Authentication/Authentication';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Router>
        <Routes>
          <Route path="/" element={<Customize />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/Authentication" element={<Authentication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
