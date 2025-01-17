import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './AnimatedText.css'; // Import the CSS file

const AnimatedText = ({ isVisible }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      // Animate text appearing
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 0, scale: 0.8 }, // Starting state
        { opacity: 1, y: 50, scale: 3, duration: 1, ease: 'power1.out' } // Final state
      );
    } else {
      // Animate text disappearing
      gsap.to(textRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.8,
        duration: 0.8,
        ease: 'power3.in',
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={textRef}
      className="animated-text"
    >
      Want to start a business?
    </div>
  );
};

export default AnimatedText;
