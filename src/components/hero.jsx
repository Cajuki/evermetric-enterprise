import React from 'react';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">Healthcare, made dependable</span>
        <h1 className="hero-title">
          Better care starts with <span className="highlight">better equipment.</span>
        </h1>
        <p className="hero-subtitle">
          Evermetric Enterprises supplies medical and laboratory equipment, backed by the
          expertise and support healthcare teams need to deliver their best work.
        </p>
        <div className="hero-buttons">
          <a className="btn-primary" href="#contact">
            Request Quote
            <ArrowRight size={20} />
          </a>
          <a className="btn-secondary" href="#equipment">
            View Products
          </a>
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
        <div className="image-placeholder" role="img" aria-label="Healthcare professional working with medical equipment">
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
