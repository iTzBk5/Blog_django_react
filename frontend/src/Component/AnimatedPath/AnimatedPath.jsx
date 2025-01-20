import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedPath = () => {
  const pathRef = useRef(null); // Reference to the SVG path

  useEffect(() => {
    const path = pathRef.current; // Get the SVG path element
    const pathLength = path.getTotalLength(); // Calculate the path's total length

    // Define the portion of the path to skip
    const skipLength = pathLength * 0.4; // Skip 40% of the path (adjust as needed)

    // Immediately animate the first 40% of the path
    gsap.fromTo(
      path,
      {
        strokeDasharray: pathLength, // Define the stroke pattern length
        strokeDashoffset: pathLength, // Start with the entire path hidden
      },
      {
        strokeDashoffset: pathLength - skipLength, // Animate the first 40% of the path
        duration: 1.5, // Adjust the duration for the initial animation
        ease: 'power1.inOut', // Add an easing effect
      }
    );

    // Animate the remaining path with scroll
    gsap.fromTo(
      path,
      {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength - skipLength, // Start from the 40% point
      },
      {
        strokeDashoffset: 0, // Reveal the remaining 60% of the path
        ease: 'power1.inOut', // Add an easing effect
        scrollTrigger: {
          trigger: path, // The element that triggers the animation
          start: 'top top', // Start animation when the top of the path reaches the viewport's top
          end: 'bottom center', // End animation when the bottom of the path leaves the viewport
          scrub: true, // Synchronize animation with scroll
        },
      }
    );
  }, []);

  return (
    <div style={{ height: '1000vh' }}> {/* Space for scrolling */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1100 2600"
        style={{
          position: 'absolute',
          top: '230%',
          left: '0%',
          transform: 'translate(0%, -50%)',
        }}
      >
        <path
          ref={pathRef}
          d="M100,10 C350,500 200,600 700,450 
            S0,100 40,300 400,500 
            300,700 300,1000 300,1000 600,1300 900,1400
            1000,1500 400,1900
            800,2100 600,2500" // The path definition
          stroke="black"
          fill="transparent"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};

export default AnimatedPath;
