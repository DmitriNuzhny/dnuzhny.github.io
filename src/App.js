import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;