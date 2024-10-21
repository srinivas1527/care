
import React from 'react';
import './About.css';
import aboutImg from '../assets/about-us.png';

const About = () => {
  return (
    <section id="about" className="about-us">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>At HealthCare Provider we are dedicated to delivering exceptional medical care...</p>
          </div>
          <div className="about-image">
            <img src={aboutImg} alt="About us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
