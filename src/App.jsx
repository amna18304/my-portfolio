import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Services from './pages/Services'; // Naya import
import Contact from './pages/Contact';   // Naya import

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} /> {/* Yahan add hua */}
        <Route path="/contact" element={<Contact />} />   {/* Yahan add hua */}
        
        {/* Redirect for any wrong URL */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;