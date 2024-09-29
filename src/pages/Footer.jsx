import React from 'react';
import './Footer.css'; // Separate CSS for the footer

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? 'dark' : ''}`}>
      <p>© k3mbon | HiBengsart</p>
    </footer>
  );
};

export default Footer;
