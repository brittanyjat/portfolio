import React, { Component } from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import bg1 from './assets/bg1.jpeg';

export default function App() {
  return (
    <div>
      <Hero />
      
      <div id='about'>
        <About />
      </div>

      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
