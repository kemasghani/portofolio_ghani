import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Experience,
  Contact,
  Feedbacks,
  Hero,
  Tech,
  Works,
  StarsCanvas,
  Navbar,
} from './components';
import SplashScreen from './components/SplashScreen'; // Import the SplashScreen component

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 10000); // Show for 7 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className='w-[200vw] bg-white'> {showSplash && <SplashScreen />}</div>
      <div className={`relative z-0 bg-primary ${!showSplash ? 'fade-out' : ''}`}>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
