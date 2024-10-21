
import React from 'react';
import './Services.css';
import generalMedicine from '../assets/general-medicine.png';
import pediatrics from '../assets/pediatrics.png';
import cardiology from '../assets/pediatrics.png';
import orthopedics from '../assets/orthopedics.png';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={generalMedicine} alt="General Medicine" />
            <h3>General Medicine</h3>
            <p>Comprehensive care for a wide range of health issues.</p>
          </div>
          <div className="service-card">
            <img src={pediatrics} alt="Pediatrics" />
            <h3>Pediatrics</h3>
            <p>Specialized care for infants, children, and adolescents.</p>
          </div>
          <div className="service-card">
            <img src={cardiology} alt="Cardiology" />
            <h3>Cardiology</h3>
            <p>Expert diagnosis and treatment of heart conditions.</p>
          </div>
          <div className="service-card">
            <img src={orthopedics} alt="Orthopedics" />
            <h3>Orthopedics</h3>
            <p>Specialized care for bones, joints, and musculoskeletal issues.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
