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
    // Set body overflow to hidden when splash screen is visible
    if (showSplash) {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    }

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 10000); // Show for 10 seconds

    return () => {
      clearTimeout(timer);
      // Revert body overflow styles when splash screen is no longer visible
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    };
  }, [showSplash]);

  return (
    <BrowserRouter>
      <div className='w-[100vw] bg-white'> {showSplash && <SplashScreen />}</div>
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
