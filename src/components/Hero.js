import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Dmitri Nuzhny</h1>
        <h2>Lead Web3 Developer & Full-Stack Engineer</h2>
        <p>
          Specializing in blockchain technology and web applications. 
          Experienced in developing decentralized applications (dApps) and smart contracts 
          on Ethereum and Arbitrum networks.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
        <div className="hero-contact-info">
          <p><i className="fas fa-envelope"></i> dmitrinuzhny@outlook.com</p>
          <p><i className="fas fa-phone"></i> (845) 499-6018</p>
          <p><i className="fas fa-map-marker-alt"></i> Spring Valley, NY</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;