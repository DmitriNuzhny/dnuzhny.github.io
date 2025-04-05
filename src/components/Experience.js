import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Lead Web3 Developer',
      company: 'Arbitrex',
      period: 'January 2020 – July 2024',
      description: 'As the Lead Web3 Developer at Arbitrex, I spearhead the design, development, and deployment of decentralized applications (dApps) and smart contracts on the Ethereum and Arbitrum networks. My role involves working closely with a team of blockchain developers, product managers, and stakeholders to build innovative solutions in the decentralized finance (DeFi) space.',
      responsibilities: [
        'Smart Contract Development: Architected and implemented complex smart contracts using Solidity, focusing on security, efficiency, and scalability. These contracts underpin various DeFi products, including staking mechanisms, yield farming platforms, and decentralized exchanges (DEXs)',
        'Integration with Layer 2 Solutions: Led the integration of Layer 2 scaling solutions, particularly Arbitrum, to enhance transaction throughput and reduce gas fees. This involved close collaboration with the core protocol teams to ensure seamless interoperability with Ethereum\'s mainnet.',
        'dApp Development: Developed user-facing decentralized applications using React, Web3.js, and Ethers.js, ensuring a seamless user experience while interacting with the blockchain. These applications are used by thousands of users for managing digital assets, participating in governance, and interacting with DeFi protocols.',
        'Security Audits: Conducted and oversaw internal smart contract audits and worked with external auditors to ensure the security of all deployed contracts. I implemented best practices for secure contract development, significantly reducing the risk of exploits.',
        'Team Leadership: Managed and mentored a team of 10+ blockchain developers, providing technical guidance and fostering a culture of innovation. I was responsible for setting development standards, conducting code reviews, and ensuring the team met project deadlines.',
        'Collaboration with Partners: Worked closely with partners and third-party services to integrate additional functionalities into Arbitrex\'s ecosystem, such as oracle services, token bridges, and cross-chain swaps.',
        'Research and Innovation: Continuously researched emerging technologies in the blockchain space, including zero-knowledge proofs (zk-SNARKs) and non-fungible tokens (NFTs), and proposed potential applications for Arbitrex.'
      ],
      achievements: [
        'Deployed Multiple High-Value Smart Contracts: Successfully deployed and managed smart contracts that handle over $50 million in total value locked (TVL) across various DeFi platforms.',
        'Reduced Gas Costs by 40%: Through Layer 2 integration and optimization of smart contract code, reduced average transaction gas costs by 40%, significantly improving user experience.',
        'Security First Approach: Implemented a robust testing and auditing process that led to zero security breaches in over three years of continuous development.',
        'Expanded User Base: Contributed to the growth of Arbitrex\'s user base by 200% through the development of user-friendly interfaces and the deployment of highly efficient smart contracts.'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Fox Factory',
      period: 'January 2023 – May 2024',
      description: 'Led development of various projects including BDS Suspension and Akeneo-Shopify integration.',
      responsibilities: [
        'Lead development of BDS Suspension project resulting in a successful brand launch for the company',
        'Built Akeneo-Shopify module in Node.js to import dynamic product data such as price and variants from PIM to Shopify for enterprise truck parts manufacturer selling thousands of unique products.',
        'Implemented auxiliary apps using React and Node.js such as a social media gallery for customer builds.',
        'Contributed to theme code in Liquid and JS, updated legacy PHP site, and even built C# backend on Azure and assisted mobile developers to connect Flutter app to authentication and data endpoints.',
        'Managed various Azure resources including AD B2C Auth, Function App, Blob/File Storage, DB, etc.'
      ]
    },
    {
      title: 'Full-Stack Software Engineer',
      company: 'Navient',
      period: 'August 2020 – December 2022',
      description: 'Contributed to the reconstruction and modernization of large-scale data processing applications.',
      responsibilities: [
        'Contributed to the reconstruction and modernization of large-scale data processing application in Node.js to centralize student financial aid data across various college networks.',
        'Implemented info module to connect to several college networks and ingest data to our central database.',
        'Constructed API module to provide colleges with access to Navient financial aid records and updates.',
        'Assisted React Typescript with Redux development to provide user interface for college admins.'
      ]
    },
    {
      title: 'Angular / Spring Boot Engineer',
      company: 'Santa Fe College',
      period: 'May 2019 – August 2020',
      description: 'Assisted in building system architecture and implementation of college student portal.',
      responsibilities: [
        'Assisted in building system architecture and implementation of college student portal for account access, class enrollment and financial aid application, and coursework management.',
        'Used Hibernate and JPA to assemble database queries and implement backend services in Sprint Boot processing student information and academic transcripts.',
        'Implemented HTTP requests in Angular to get data and updated user interface.'
      ]
    },
    {
      title: 'Junior PHP Developer',
      company: 'DeliverLogic',
      period: 'June 2018 – February 2019',
      description: 'Provided support on development for various services and integrations.',
      responsibilities: [
        'Provide support on development for Google Food Ordering graphical monitoring using Google Visualization framework.',
        'Implemented 3rd party API services such as Twilio 2 factor authentication, 7/11 food ordering services, and Slaask automated customer support.',
        'Developed table-based financial reports for restaurants and users.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item animate-fade-in">
            <h3>{exp.title}</h3>
            <div className="company-info">
              <span className="company-name">{exp.company}</span>
              <span className="duration">{exp.period}</span>
            </div>
            <p className="experience-description">{exp.description}</p>
            
            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <div className="responsibilities">
                <h4>Key Responsibilities:</h4>
                <ul>
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {exp.achievements && exp.achievements.length > 0 && (
              <div className="achievements">
                <h4>Achievements:</h4>
                <ul>
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;