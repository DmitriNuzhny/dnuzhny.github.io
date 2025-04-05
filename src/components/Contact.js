import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-info">
        <p><strong>Email:</strong> dmitrinuzhny@outlook.com</p>
        <p><strong>Phone:</strong> (845) 499-6018</p>
        <p><strong>Location:</strong> New York, NY</p>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
            GitHub
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="social-icon">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;