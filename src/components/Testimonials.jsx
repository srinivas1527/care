
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Patient Testimonials</h2>
        <div className="testimonial-carousel">
          <div className="testimonial-card">
            <p>"The care I received was excellent."</p>
            <cite>- John D.</cite>
          </div>
          <div className="testimonial-card">
            <p>"The pediatric team made my child feel comfortable."</p>
            <cite>- Sarah M.</cite>
          </div>
          <div className="testimonial-card">
            <p>"They treated me like family."</p>
            <cite>- Srinivas S.</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
