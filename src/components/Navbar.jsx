import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  // Mobile menu open/close karne ki state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo: Is mein spacing humne CSS se set kar di hai */}
      <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
        code<span>with</span>amna
      </Link>
      
      {/* Mobile Menu Icon: Ye 3 lines (Hamburger) show karega */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {/* Agar menu open ho toh 'X' dikhaye, warna 3 lines '☰' */}
        {isOpen ? "✕" : "☰"}
      </div>

      {/* Navigation Links: Jab 'active' class hogi tou mobile par menu show hoga */}
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
    </nav>
  );
};

export default Navbar;