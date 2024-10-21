import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Testimonials />
      <AppointmentForm />
      <Footer />
    </div>
  );
}

export default App;
