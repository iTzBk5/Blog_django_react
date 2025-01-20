import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './AnimatedText.css';

const AnimatedText = ({ isVisible }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out'
      });
    } else {
      gsap.to(textRef.current, {
        opacity: 0,
        y: -400,
        scale: 0.8,
        duration: 0.8,
        ease: 'power2.in'
      });
    }
  }, [isVisible]);

  return (
    <div ref={textRef} className="animated-text">
      Want to start a business?
    </div>
  );
};

export default AnimatedText;

