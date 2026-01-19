import React from 'react';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Advanced Medical & Laboratory
          <span className="highlight"> Equipment Solutions</span>
        </h1>
        <p className="hero-subtitle">
          Evermetric Enterprises provides state-of-the-art medical equipment, laboratory 
          instruments, and comprehensive healthcare solutions with unparalleled service 
          and support.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">
            Request Quote
            <ArrowRight size={20} />
          </button>
          <button className="btn-secondary">
            View Products
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <Shield className="stat-icon" />
            <div>
              <h3>Certified</h3>
              <p>ISO 13485 Certified</p>
            </div>
          </div>
          <div className="stat-item">
            <Award className="stat-icon" />
            <div>
              <h3>500+</h3>
              <p>Hospitals Served</p>
            </div>
          </div>
          <div className="stat-item">
            <Clock className="stat-icon" />
            <div>
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-image">
        <div className="image-placeholder">
          {/* Replace with actual image */}
          <div className="image-overlay">
            <div className="floating-card">
              <h4>Since 1998</h4>
              <p>25+ Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;