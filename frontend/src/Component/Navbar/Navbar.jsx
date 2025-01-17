import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Navbar.css'; // Import the CSS file

const Navbar = ({ isVisible }) => {
  const navRef = useRef(null);

  useEffect(() => {
    // Control navbar visibility
    if (isVisible) {
      gsap.to(navRef.current, { opacity: 1, y: 0, duration: 0.8 });
    } else {
      gsap.to(navRef.current, { opacity: 0, y: -30, duration: 0.8 });
    }
  }, [isVisible]);

  return (
    <nav ref={navRef} className="navbar">
      {/* Left Section: Logo */}
      <div className="navbar-logo">
        Business<span>Logo</span>
      </div>

      {/* Middle Section: Categories */}
      <ul className="navbar-categories">
        <li>Start</li>
        <li>Grow</li>
        <li>Monetize</li>
      </ul>

      {/* Right Section: Search and Auth Buttons */}
      <div className="navbar-actions">
        <button className="navbar-search-button">Search</button>

        {/* Auth Buttons */}
        <button className="navbar-auth-button navbar-signin-button">
          Sign In
        </button>
        <button className="navbar-auth-button navbar-signup-button">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
