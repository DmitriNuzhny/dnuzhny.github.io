import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './styles/global.css';
import './styles/App.css';
import './styles/Hero.css';
import './styles/Skills.css';
import './styles/Experience.css';
import './styles/Education.css';
import './styles/Projects.css';
import './styles/Blog.css';
import './styles/Contact.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <Helmet>
        <title>Dmitri Nuzhny - Lead Web3 Developer & Full-Stack Engineer</title>
        <meta name="description" content="Portfolio website of Dmitri Nuzhny, a Lead Web3 Developer and Full-Stack Engineer specializing in blockchain technology and web applications." />
        <meta name="keywords" content="Web3, Blockchain, Full-Stack, React, Node.js, Solidity, Ethereum, Arbitrum" />
        <meta property="og:title" content="Dmitri Nuzhny - Lead Web3 Developer & Full-Stack Engineer" />
        <meta property="og:description" content="Portfolio website of Dmitri Nuzhny, a Lead Web3 Developer and Full-Stack Engineer specializing in blockchain technology and web applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://dnuzhny.github.io" />
        <link rel="canonical" href="http://dnuzhny.github.io" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </button>
      <footer className="footer">
        <div className="social-links">
          <a href="https://github.com/dnuzhny" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/dnuzhny" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/dnuzhny" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p>© {new Date().getFullYear()} Dmitri Nuzhny. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;