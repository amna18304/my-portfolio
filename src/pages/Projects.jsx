import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Import check kar lein

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects: ", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <div className="text-white text-center mt-5">Loading...</div>;

  // --- YE WOH RETURN HAI JO AAPNE PASTE KARNA HAI ---
  return (
    <section className="container py-5">
      <h2 className="hero-title text-center mb-5">
        My <span className="name-purple">Projects</span>
      </h2>
      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4">
            <div className="glass-card">
              <div className="project-icon-box">🚀</div>
              <h3 className="card-title-neon">{project.title}</h3>
              <p className="card-desc">{project.description}</p>
              <div className="project-links">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="view-live-btn text-decoration-none"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; // Sab se aakhir mein ye export hona chahiye