const Skills = () => {
  const skills = {
    languages: ['JavaScript', 'Java', 'Python', 'PHP', 'Solidity', 'Solana'],
    frameworks: ['React', 'Node', 'Spring Boot', 'Django', 'Laravel', 'web3'],
    other: ['Git', 'Azure', 'AWS', 'Linux', 'TensorFlow', 'Selenium']
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Languages</h3>
          <ul>
            {skills.languages.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        {/* ... similar structure for frameworks and other ... */}
      </div>
    </section>
  );
};

export default Skills;