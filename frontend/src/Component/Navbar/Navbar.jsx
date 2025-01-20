import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Navbar.css';

const Navbar = ({ isVisible }) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      if (isVisible) {
        gsap.to(navRef.current, { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power2.out' 
        });
      } else {
        gsap.to(navRef.current, { 
          opacity: 0, 
          y: -30, 
          duration: 0.8, 
          ease: 'power2.in' 
        });
      }
    }
  }, [isVisible]);

  return (
    <nav ref={navRef} className={`navbar ${isVisible ? 'visible' : ''}`}>
      <div className="navbar-logo">Business<span>Logo</span></div>
      <ul className="navbar-categories">
        <li>Start</li>
        <li>Grow</li>
        <li>Monetize</li>
      </ul>
      <div className="navbar-actions">
        <button className="navbar-search-button">Search</button>
        <button className="navbar-auth-button navbar-signin-button">Sign In</button>
        <button className="navbar-auth-button navbar-signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;

