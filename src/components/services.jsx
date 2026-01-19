import React from 'react';
import { 
  Stethoscope, 
  Microscope, 
  Heart, 
  Truck, 
  Settings, 
  Users 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope />,
      title: 'Medical Equipment',
      description: 'Complete range of diagnostic and therapeutic medical devices for hospitals and clinics.',
      features: ['Diagnostic Imaging', 'Patient Monitoring', 'Surgical Equipment']
    },
    {
      icon: <Microscope />,
      title: 'Laboratory Solutions',
      description: 'Advanced laboratory instruments and consumables for research and clinical labs.',
      features: ['Analyzers', 'Centrifuges', 'PCR Systems']
    },
    {
      icon: <Heart />,
      title: 'Critical Care',
      description: 'Specialized equipment for ICU, NICU, and emergency care departments.',
      features: ['Ventilators', 'Defibrillators', 'Infusion Pumps']
    },
    {
      icon: <Truck />,
      title: 'Installation & Delivery',
      description: 'Professional installation and nationwide delivery of all equipment.',
      features: ['White Glove Service', 'Calibration', 'Setup & Testing']
    },
    {
      icon: <Settings />,
      title: 'Maintenance & Repair',
      description: 'Comprehensive maintenance contracts and emergency repair services.',
      features: ['Preventive Maintenance', '24/7 Support', 'Parts Replacement']
    },
    {
      icon: <Users />,
      title: 'Training & Support',
      description: 'Complete staff training and ongoing technical support.',
      features: ['On-site Training', 'Remote Support', 'Documentation']
    }
  ];

  return (
    <section className="services" id="services">
      <div className="section-header">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive healthcare equipment solutions tailored to your needs
        </p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;