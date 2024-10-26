// src/components/Footer.js
import React from 'react';
import '../css/Footer.css';
import logo from '../assets/peskycodes-logo.png'; // Import the logo

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="PeskyCodes Logo" className="footer-logo" />
      <p>© 2024 PeskyCodes. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
