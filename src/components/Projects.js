import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Web3 DEX Platform',
      description: 'A decentralized exchange platform built on Ethereum with smart contracts for token swapping and liquidity provision.',
      image: '/images/projects/dex-platform.jpg',
      tags: ['React', 'Solidity', 'Web3.js', 'Node.js'],
      github: 'https://github.com/yourusername/dex-platform',
      demo: 'https://dex-platform-demo.com'
    },
    {
      title: 'AI-Powered Trading Bot',
      description: 'Machine learning-based cryptocurrency trading bot that analyzes market data and executes trades automatically.',
      image: '/images/projects/trading-bot.jpg',
      tags: ['Python', 'TensorFlow', 'API Integration', 'AWS'],
      github: 'https://github.com/yourusername/trading-bot',
      demo: 'https://trading-bot-demo.com'
    },
    {
      title: 'Blockchain Supply Chain',
      description: 'Supply chain tracking system using blockchain technology for transparent and immutable record-keeping.',
      image: '/images/projects/supply-chain.jpg',
      tags: ['Hyperledger', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/supply-chain',
      demo: 'https://supply-chain-demo.com'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card animate-fade-in">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onError={(e) => {
                e.target.src = '/images/project-placeholder.jpg';
              }}
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 