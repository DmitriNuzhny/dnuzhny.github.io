import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Arbitrex',
      position: 'Lead Web3 Developer',
      duration: 'January 2020 – July 2024',
      responsibilities: [
        'Spearheaded design, development, and deployment of dApps and smart contracts on Ethereum and Arbitrum networks',
        'Led integration of Layer 2 scaling solutions, particularly Arbitrum, to enhance transaction throughput and reduce gas fees',
        'Developed user-facing decentralized applications using React, Web3.js, and Ethers.js',
        'Conducted and oversaw internal smart contract audits and worked with external auditors',
        'Managed and mentored a team of 10+ blockchain developers'
      ],
      achievements: [
        'Deployed smart contracts handling over $50 million in total value locked (TVL)',
        'Reduced gas costs by 40% through Layer 2 integration and optimization',
        'Implemented a robust testing and auditing process with zero security breaches in 3+ years',
        'Contributed to 200% growth in user base through efficient smart contracts and user-friendly interfaces'
      ]
    },
    {
      company: 'Fox Factory',
      position: 'Senior Software Engineer',
      duration: 'January 2023 – May 2024',
      responsibilities: [
        'Led development of BDS Suspension project resulting in a successful brand launch',
        'Built Akeneo-Shopify module in Node.js to import dynamic product data',
        'Implemented auxiliary apps using React and Node.js',
        'Contributed to theme code in Liquid and JS, updated legacy PHP site',
        'Managed various Azure resources including AD B2C Auth, Function App, Blob/File Storage, DB'
      ],
      achievements: [
        'Successfully launched BDS Suspension brand with complete e-commerce functionality',
        'Streamlined product data management for thousands of unique products',
        'Improved customer engagement through social media gallery integration'
      ]
    },
    {
      company: 'Navient',
      position: 'Full-Stack Software Engineer',
      duration: 'August 2020 – December 2022',
      responsibilities: [
        'Contributed to modernization of large-scale data processing application in Node.js',
        'Implemented info module to connect to college networks and ingest data to central database',
        'Constructed API module to provide colleges with access to financial aid records',
        'Assisted React Typescript with Redux development for college admin interfaces'
      ],
      achievements: [
        'Successfully centralized student financial aid data across multiple college networks',
        'Improved data processing efficiency by 35%',
        'Enhanced user experience for college administrators through intuitive interfaces'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.position} - {exp.company}</h3>
          <p className="duration">{exp.duration}</p>
          <h4>Key Responsibilities:</h4>
          <ul>
            {exp.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <h4>Achievements:</h4>
          <ul>
            {exp.achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;