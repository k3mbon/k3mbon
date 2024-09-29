import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';  // Import icons
import './Home.css';
import Footer from './Footer';  // Import Footer component
import k3mbon from '../assets/k3mbon.jpeg'

const Home = () => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`home-container ${darkMode ? 'dark' : 'light'}`}>
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
          <p><b>k3mbon</b> is an internet persona that pops up with memes, shitposts, and playful content. Known for humorous takes and random musings, you’ll find a mix of Turnover (and stuff) in everything shared.</p>
          <p>I also do commission work in coding, 3D rendering, or animation. When people contact "k3mbon" in private, the persona shifts to a more professional, business-oriented personality, ready to deliver high-quality work.</p>
          <ul className="links">
            <li><a href="your-showreel-url-here" className="link">Showreel</a></li>
            <li><a href="https://www.instagram.com/hi.bengsart/" className="link">Instagram</a></li>
            <li><a href="your-contact-url-here" className="link">Contact</a></li>
            <li><a href="your-hibengsart-url-here" className="link">HiBengsart</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Component */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;
