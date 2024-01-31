import React from 'react';
import './css/pico.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from "./Home";
import Projects from './Projects';
import Links from "./Links";
import Playground from './Playground';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="projects" element={ <Projects/> } />
        <Route path="links" element={ <Links/> } />
        <Route path="playground" element={ <Playground/> } />
      </Routes>
    </div>
  )
}

export default App