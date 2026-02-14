import React from 'react';

const Services = () => {
  const services = [
    { title: "Web Development", desc: "Building responsive, high-performance websites using React.js and modern tech.", icon: "💻" },
    { title: "UI/UX Design", desc: "Creating visually stunning and user-friendly interfaces with a focus on experience.", icon: "🎨" },
    { title: "App Optimization", desc: "Improving website speed, SEO, and overall performance for better engagement.", icon: "⚡" }
  ];

  return (
    <div className="container mt-5 pt-5 pb-5">
      <div className="text-center mb-5 mt-4">
        <h2 className="hero-title">My <span className="name-purple">Services</span></h2>
        <p className="bio-text">Solutions I provide to help you build your digital presence.</p>
      </div>

      <div className="row g-4 justify-content-center">
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="glass-card service-card">
              <div className="project-icon-box">{service.icon}</div>
              <h4 className="card-title-neon">{service.title}</h4>
              <p className="card-desc">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;