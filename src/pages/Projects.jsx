import React from 'react';

const Projects = () => {
  const projects = [
    { title: "E-Commerce Site", desc: "A full-stack react application with payment integration." },
    { title: "Social Dashboard", desc: "Real-time data visualization using React and Node.js." },
    { title: "Portfolio Concept", desc: "A creative neon-themed portfolio design for developers." }
  ];

  return (
    <div className="container mt-5 pt-5 pb-5">
      <div className="text-center mb-5 mt-4">
        <h2 className="hero-title">
          Recent <span className="name-purple">Works</span>
        </h2>
        <p className="bio-text">Hand-picked projects that showcase my coding journey.</p>
      </div>

      <div className="row g-4 justify-content-center">
        {projects.map((proj, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="glass-card">
              <div className="project-icon-box">🚀</div>
              <h4 className="card-title-neon">{proj.title}</h4>
              <p className="card-desc">{proj.desc}</p>
              <div className="card-btn-wrapper">
                <button className="view-live-btn">View Live</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;