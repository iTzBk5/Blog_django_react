import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimatedText from './Component/AnimatedText/AnimatedText';
import Navbar from './Component/Navbar/Navbar';
import AnimatedPath from './Component/AnimatedPath/AnimatedPath';
import './App.css';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsNavbarVisible(scrollY > 100); // Show navbar after scrolling down 100px
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    axios
      .get('http://127.0.0.1:8000/api/')
      .then((response) => {
        console.log('Data fetched:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <AnimatedPath />
      <AnimatedText isVisible={!isNavbarVisible} />
      <Navbar isVisible={isNavbarVisible} />
      <div className="content">
        <p>Scroll down to see the magic!</p>
      </div>
    </div>
  );
}

export default App;

