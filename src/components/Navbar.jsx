import React, { useState } from 'react';
import '../designs/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => scrollToSection('home')}>
        Portfolio
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a onClick={() => scrollToSection('home')}>Home</a>
        <a onClick={() => scrollToSection('projects')}>Projects</a>
        <a onClick={() => scrollToSection('about')}>About</a>
        <a onClick={() => scrollToSection('interests')}>Interests</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
