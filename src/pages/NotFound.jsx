import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';  // Import icons
import './NotFound.css'; // Ensure to create a separate CSS file for styling
import k3mbon from '../assets/k3mbon.jpeg'; // Use the same image or a different one

const NotFound = () => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`not-found-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="content-wrapper">
        {/* Switch for Dark/Light Mode */}
        <div className="theme-switch">
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? <FaSun className="icon sun" /> : <FaMoon className="icon" />}
          </button>
        </div>

        <div className="image-container">
          <img src={k3mbon} alt="Profile" className="profile-image" />
        </div>

        <div className="description">
          <h1>404 - Page Not Found</h1>
          <p>Oops! Looks like you’ve wandered off the beaten path.</p>
          <p>Don’t worry, even the best of us get lost sometimes. Here are some links to help you find your way:</p>
          <ul className="links">
            <li><a href="/" className="link">Home</a></li>
            <li><a href="/artwork" className="link">Artwork</a></li>
            <li><a href="https://www.instagram.com/hi.bengsart/" className="link">Instagram</a></li>
            <li><a href="your-contact-url-here" className="link">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Optional Footer Component */}
      {/* <Footer darkMode={darkMode} /> */}
    </div>
  );
};

export default NotFound;
