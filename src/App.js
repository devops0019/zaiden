import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ThankYou from './ThankYou';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  useEffect(() => {
    gsap.to('.logo-bg', {
      rotate: 720,
      ease: 'none',
      scrollTrigger: {
        trigger: '.App',
        scrub: true,
      },
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="logo-bg"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
