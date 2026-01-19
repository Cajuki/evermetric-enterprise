import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Equipment from './components/Equipment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Equipment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;