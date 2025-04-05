import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'CUNY Brooklyn College',
      period: '2014 - 2018',
      details: [
        'Major: Computer Science',
        'Minor: Mathematics',
        'GPA: 3.8/4.0',
        'Dean\'s List: All Semesters',
        'Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems, Computer Networks, Software Engineering, Artificial Intelligence, Machine Learning'
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-item animate-fade-in">
            <h3>{edu.degree}</h3>
            <div className="school-info">
              <span className="school-name">{edu.school}</span>
              <span className="period">{edu.period}</span>
            </div>
            <ul className="education-details">
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;