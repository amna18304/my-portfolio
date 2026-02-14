import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const phrases = ["Web Developer", "React Specialist", "UI/UX Designer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    setTimeout(handleTyping, isDeleting ? 70 : 150);
  }, [text, isDeleting, loopNum]);

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center text-center">
      <div>
        <h1 className="hero-title mb-3">
          Hi, I'm <span className="name-purple">Amna Tahir</span>
        </h1>
        <h3 className="mb-4 fw-light text-white">
          I am a professional <span style={{color: '#9d4edd', borderRight: '2px solid white', paddingRight: '5px'}}>{text}</span>
        </h3>
        
        {/* Professional Bio to fill the space */}
        <p className="bio-text mb-5">
          Passionate about building high-quality, responsive web applications. 
          I specialize in React.js and modern UI designs to create seamless digital experiences 
          that are both functional and visually stunning.
        </p>

        <div className="d-flex gap-4 justify-content-center">
          <Link to="/projects" className="btn-p-fill">Explore Projects</Link>
          <Link to="/skills" className="btn-p-outline">My Skills</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;