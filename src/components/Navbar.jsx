import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
        code<span>with</span>amna
      </Link>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"} {/* White prominent lines */}
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;