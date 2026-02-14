import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top px-5" style={{background: 'rgba(10, 8, 12, 0.9)', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
      <div className="container-fluid">
        <NavLink className="signature-brand" to="/" style={{ letterSpacing: '1px', textTransform: 'none' }}>
  code<span style={{ color: 'var(--p-glow)', fontWeight: '800' }}>with</span>amna
</NavLink>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/skills">Skills</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/projects">Projects</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/services">Services</NavLink></li>
<li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;