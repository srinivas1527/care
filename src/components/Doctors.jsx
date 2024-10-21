
import React from 'react';
import './Doctors.css';
import doctor1 from '../assets/doctor-1.png';
import doctor2 from '../assets/doctor-2.png';
import doctor3 from '../assets/doctor-3.png';
import doctor4 from '../assets/doctor-4.png';

const Doctors = () => {
  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <h2 className="section-title">Our Doctors</h2>
        <div className="doctors-grid">
          <div className="doctor-card">
            <img src={doctor1} alt="Dr. Emily Johnson" />
            <h3>Dr. Emily Johnson</h3>
            <p>General Medicine</p>
            <a href="/doctors/emily-johnson" className="view-profile">View Profile</a>
          </div>
          <div className="doctor-card">
            <img src={doctor2} alt="Dr. Michael Chen" />
            <h3>Dr. Michael Chen</h3>
            <p>Pediatrics</p>
            <a href="/doctors/michael-chen" className="view-profile">View Profile</a>
          </div>
          <div className="doctor-card">
            <img src={doctor3} alt="Dr. Sarah Patel" />
            <h3>Dr. Sarah Patel</h3>
            <p>Cardiology</p>
            <a href="/doctors/sarah-patel" className="view-profile">View Profile</a>
          </div>
          <div className="doctor-card">
            <img src={doctor4} alt="Dr. David Kim" />
            <h3>Dr. David Kim</h3>
            <p>Orthopedics</p>
            <a href="/doctors/david-kim" className="view-profile">View Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
