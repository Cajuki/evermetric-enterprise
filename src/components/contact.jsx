import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Contact us for equipment inquiries, support, or partnership opportunities
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <Phone />
            </div>
            <div>
              <h3>Phone</h3>
              <p>0790080903</p>
              <p className="info-note">24/7 Emergency Support</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Mail />
            </div>
            <div>
              <h3>Email</h3>
              <p>fidelchimwani@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <MapPin />
            </div>
            <div>
              <h3>Headquarters</h3>
              <p>123 Medical Plaza</p>
              <p>Suite 500, Healthcare District</p>
              <p>New York, NY 10001</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Clock />
            </div>
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 8AM - 6PM</p>
              <p>Saturday: 9AM - 2PM</p>
              <p>Emergency Support: 24/7</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Please describe your equipment needs, required specifications, or any questions..."
              />
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>I agree to receive communications from Evermetric Enterprises</span>
              </label>
            </div>

            <button type="submit" className="btn-primary">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;