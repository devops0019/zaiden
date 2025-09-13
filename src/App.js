import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ThankYou from './ThankYou';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
// import whatsappIcon from './assets/'

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
        <WhatsappChatIcon />
      </div>
    </Router>
  );
}

const WhatsappChatIcon = () => {
  const link = `https://wa.me/917507070707?text=Hi, I saw your ad on Google and I’m interested in your project. Can you share more details?`
  return (
    <a target='_blank' href={link} className='WhatsappChatIcon'>
      <img src={'/images/wp.png'}  />
    </a>
  )
}

export default App;
