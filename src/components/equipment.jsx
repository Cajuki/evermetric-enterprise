import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Equipment = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Equipment' },
    { id: 'imaging', name: 'Diagnostic Imaging' },
    { id: 'lab', name: 'Laboratory' },
    { id: 'monitoring', name: 'Patient Monitoring' },
    { id: 'surgical', name: 'Surgical' },
  ];

  const equipment = [
    {
      id: 1,
      name: 'Digital X-Ray System',
      category: 'imaging',
      description: 'High-resolution digital radiography system',
      features: ['Wireless Detector', 'Full-Body Imaging', 'Low Radiation']
    },
    {
      id: 2,
      name: 'Clinical Chemistry Analyzer',
      category: 'lab',
      description: 'Fully automated analyzer for clinical chemistry',
      features: ['High Throughput', 'Multi-Parameter', 'Integrated QC']
    },
    {
      id: 3,
      name: 'Patient Monitor',
      category: 'monitoring',
      description: 'Multi-parameter vital signs monitor',
      features: ['12-inch Touchscreen', 'Wireless Connectivity', 'Central Monitoring']
    },
    {
      id: 4,
      name: 'Surgical C-Arm',
      category: 'surgical',
      description: 'Mobile imaging for surgical procedures',
      features: ['Flat Panel Detector', '3D Imaging', 'Low Dose Technology']
    },
    {
      id: 5,
      name: 'Ultrasound System',
      category: 'imaging',
      description: 'Portable diagnostic ultrasound',
      features: ['Multi-frequency Probes', 'Doppler Imaging', 'DICOM Compatible']
    },
    {
      id: 6,
      name: 'Blood Gas Analyzer',
      category: 'lab',
      description: 'Point-of-care blood analysis system',
      features: ['Rapid Results', 'Cartridge Based', 'Easy Maintenance']
    }
  ];

  const filteredEquipment = equipment.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section className="equipment" id="equipment">
      <div className="section-header">
        <h2 className="section-title">Featured Equipment</h2>
        <p className="section-subtitle">
          Browse our extensive catalog of medical and laboratory equipment
        </p>
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="equipment-grid">
        {filteredEquipment.map(item => (
          <div key={item.id} className="equipment-card">
            <div className="equipment-image">
              <div className="image-label">{item.category.toUpperCase()}</div>
            </div>
            <div className="equipment-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <ul className="equipment-features">
                {item.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="btn-outline">Request Details</button>
            </div>
          </div>
        ))}
      </div>

      <div className="equipment-cta">
        <button className="btn-primary">View Full Catalog</button>
      </div>
    </section>
  );
};

export default Equipment;