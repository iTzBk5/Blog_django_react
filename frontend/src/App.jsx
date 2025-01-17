import { useEffect, useState } from 'react';
import axios from 'axios';
import AnimatedText from './Component/AnimatedText/AnimatedText';
import Navbar from './Component/Navbar/Navbar';

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
    <div>
      {/* Animated Text */}
      <AnimatedText isVisible={!isNavbarVisible} />

      {/* Navbar */}
      <Navbar isVisible={isNavbarVisible} />

      {/* Content for scrolling */}
      <div style={{ height: '200vh', background: 'linear-gradient(to bottom, white, lightgray)' }}>
        <p style={{ marginTop: '100vh', textAlign: 'center', fontSize: '1.5rem' }}>
          Scroll down to see the magic!
        </p>
      </div>
    </div>
  );
}

export default App;
