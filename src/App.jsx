import { useState } from 'react'
import './designs/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Interests from "./components/Interests";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/interests" element={<Interests />} />
      </Routes>
    </Router>
    </>
      
  )
}

export default App
