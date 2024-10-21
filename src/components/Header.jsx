
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="logo">HealthCare Provider</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#appointments">Appointments</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
