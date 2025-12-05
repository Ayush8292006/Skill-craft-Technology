import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'

import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Skills from './sections/Skills'
import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'
import IntroAnimation from './components/IntroAnimation'

const App = () => {
  
  // 🔥 Intro show/hide state
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative gradient text-white">
      
      {/* 🔥 Show intro first, then hide after animation */}
      {showIntro && (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      )}

      {/* Custom cursor */}
      <CustomCursor />

      {/* Main Website Content */}
      {!showIntro && (
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
       
        
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
