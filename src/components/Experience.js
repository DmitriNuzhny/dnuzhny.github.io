const Experience = () => {
  const experiences = [
    {
      company: 'Arbitrex',
      position: 'Lead Web3 Developer',
      duration: 'January 2020 – July 2024',
      responsibilities: [
        'Spearheaded design, development, and deployment of dApps and smart contracts',
        'Led integration of Layer 2 scaling solutions (Arbitrum)',
        'Conducted security audits and implemented best practices',
        'Managed team of 10+ blockchain developers'
      ],
      achievements: [
        'Deployed contracts handling $50M+ TVL',
        'Reduced gas costs by 40%',
        'Achieved zero security breaches in 3 years',
        'Grew user base by 200%'
      ]
    },
    // ... other experiences ...
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.position} - {exp.company}</h3>
          <p className="duration">{exp.duration}</p>
          <h4>Responsibilities:</h4>
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