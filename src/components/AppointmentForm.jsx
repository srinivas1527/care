
import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, date, service } = formData;
    if (name && email && phone && date && service) {
      alert('Thank you for booking an appointment.');
      setFormData({ name: '', email: '', phone: '', date: '', service: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="appointments" className="appointments">
      <div className="container">
        <h2 className="section-title">Book an Appointment</h2>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Preferred Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Service</label>
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Select a service</option>
              <option value="general-medicine">General Medicine</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="cardiology">Cardiology</option>
            </select>
          </div>
          <button type="submit" className="submit-button">Book Appointment</button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
