// src/components/Home.js
import React from 'react';
import '../css/Home.css';
import logo from '../assets/peskycodes-logo.png'; // Import the logo

function Home() {
  return (
    <section id="home" className="home">
      <img src={logo} alt="PeskyCodes Logo" className="home-logo" />
      <h1>Welcome to PeskyCodes</h1>
      <p>A space where code meets creativity</p>
      <button>
        <a href="#projects">Explore My Work</a>
      </button>
    </section>
  );
}

export default Home;
