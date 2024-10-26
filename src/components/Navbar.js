// src/components/Navbar.js
import React from "react";
import { Link } from "react-scroll";
import "../css/Navbar.css";
import logo from "../assets/peskycodes-logo.png"; // Import the logo

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="PeskyCodes Logo" className="logo" />
        <h2>PeskyCodes</h2>
      </div>
      <div className="nav-links">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
