import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
