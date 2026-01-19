import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">EVERMETRIC</span>
          <span className="logo-subtext">ENTERPRISES</span>
        </div>

        <div className="nav-menu">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-contact">
          <Phone size={18} />
          <span>+1 (555) 123-4567</span>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <div className="mobile-contact">
          <Phone size={18} />
          <span>0790080903</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;