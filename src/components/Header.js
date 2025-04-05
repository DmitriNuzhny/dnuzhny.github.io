import React from 'react';
import './styles/global.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;