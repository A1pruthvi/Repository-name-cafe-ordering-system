import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <span className="logo-icon">☕</span>
          <span className="logo-text">
            Smart <span className="logo-highlight">Cafe</span>
          </span>
        </div>

        {/* Hamburger Menu Toggle for Mobile */}
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
