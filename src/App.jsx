import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Equipment from './components/equipment';
import Contact from './components/contact';
import Footer from './components/footer';
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