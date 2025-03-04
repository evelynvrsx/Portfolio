import React from 'react';
import './Contact.css'; 

export default function Contact() {
  return (
    <div className="contact-container">
      {/* Heading */}
      <h1>CONTACT</h1>

      {/* Social Buttons */}
      <div className="social-buttons">
        <a href="https://www.linkedin.com/in/evelyn-salim/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin-icon.png" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/evelynvrsx" target="_blank" rel="noopener noreferrer">
          <img src="/github-icon.png" alt="GitHub" className="social-icon" />
        </a>
        <a href="mailto:evelynveronica1412@gmail.com">
          <img src="/email-icon.png" alt="Email" className="social-icon" />
        </a>
      </div>

      {/* Contact Body (Paragraph) */}
      <div className="contact-body">
        <p>
          I'm always eager to learn and connect with inspiring individuals. Whether you have an opportunity to share,
          a collaboration idea, or just want to say hello, feel free to reach out through the contact channels above.
        </p>
      </div>
    </div>
  );
}