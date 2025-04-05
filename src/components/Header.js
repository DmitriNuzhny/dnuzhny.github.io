import React from 'react';
import '../styles/global.css';

const Header = () => {
  return (
    <header className="header">
      <nav aria-label="Main Navigation">
        <ul className="nav-list">
          <li><a href="#skills" aria-label="Skills Section">Skills</a></li>
          <li><a href="#experience" aria-label="Experience Section">Experience</a></li>
          <li><a href="#education" aria-label="Education Section">Education</a></li>
          <li><a href="#contact" aria-label="Contact Section">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;