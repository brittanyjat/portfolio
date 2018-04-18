import React from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

export default function App() {
  return (
    <div>
      <div id='hero'>
        <Hero />
      </div>

      <div id='about'>
        <About />
      </div>

      <div id='skills'>
        <Skills />
      </div>

      <div id='projects'>
        <Projects />
      </div>

      <div id='contact'>
        <Contact />
      </div>

    </div>
  );
}
