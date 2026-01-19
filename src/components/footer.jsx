import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Equipment Catalog', href: '#equipment' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const servicesLinks = [
    { label: 'Medical Equipment', href: '#' },
    { label: 'Laboratory Solutions', href: '#' },
    { label: 'Equipment Maintenance', href: '#' },
    { label: 'Training Programs', href: '#' },
    { label: 'Technical Support', href: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <div className="footer-logo">
            <h2>EVERMETRIC</h2>
            <h3>ENTERPRISES</h3>
          </div>
          <p className="footer-description">
            Leading provider of advanced medical and laboratory equipment 
            solutions for healthcare institutions worldwide.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">
              <Facebook />
            </a>
            <a href="#" className="social-icon">
              <Twitter />
            </a>
            <a href="#" className="social-icon">
              <Linkedin />
            </a>
            <a href="#" className="social-icon">
              <Instagram />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul className="footer-links">
            {servicesLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to receive updates on new products and services</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button className="btn-newsletter">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Evermetric Enterprises. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;