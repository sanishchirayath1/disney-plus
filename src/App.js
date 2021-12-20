import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
