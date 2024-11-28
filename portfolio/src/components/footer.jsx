// src/components/Footer.jsx
import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© Pranjal Kumar Maurya. All Rights Reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/PranjalMaurya07" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/pranjalmaurya07/" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href="mailto:pranjalmaurya003@gmail.com" className="footer-link">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
