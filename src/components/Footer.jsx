import React from 'react'
import '../designs/Home.css'

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='foot'>
        <h1 onClick={() => scrollToSection('projects')}>Projects</h1>
        <h1 onClick={() => scrollToSection('about')}>About me</h1>
        <h1 onClick={() => scrollToSection('interests')}>Interests</h1>
        <h1 onClick={() => scrollToSection('home')}>Home</h1>
      </div>
    </div>
  )
}
