
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li><a href="#appointments">Appointments</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>123 Health Street, Medville, MD 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@healthcareprovider.com</p>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com/healthcareprovider" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com/healthcareprovider" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com/company/healthcareprovider" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
