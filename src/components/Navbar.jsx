import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  // Mobile menu ko open/close karne ke liye state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          code<span>with</span>amna
        </div>
        
        {/* Mobile Hamburger Icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "icon-bar open" : "icon-bar"}></span>
          <span className={isOpen ? "icon-bar open" : "icon-bar"}></span>
          <span className={isOpen ? "icon-bar open" : "icon-bar"}></span>
        </div>

        {/* Navigation Links */}
        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;