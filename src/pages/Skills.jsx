import React from 'react';

const Skills = () => {
  const skillsData = [
    { name: "HTML5", percentage: "95%" },
    { name: "CSS3", percentage: "90%" },
    { name: "JavaScript", percentage: "85%" },
    { name: "React.js", percentage: "80%" },
    { name: "Node.js", percentage: "75%" }
  ];

  return (
    <div className="container mt-5 pt-5 pb-5">
      <div className="text-center mb-5 mt-4">
        <h2 className="hero-title animate__animated animate__fadeIn">
          Technical <span className="name-purple">Skills</span>
        </h2>
        <p className="bio-text mt-3">My expertise levels in various technologies and tools.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-row-wrapper mb-5"> {/* Increased Margin Bottom */}
              <div className="d-flex justify-content-between align-items-end mb-3">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}</span>
              </div>
              <div className="progress-container-unique">
                <div 
                  className="progress-bar-neon" 
                  style={{ width: skill.percentage }}
                >
                  <div className="progress-glow"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;