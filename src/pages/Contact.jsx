import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5 pt-5 pb-5">
      <div className="text-center mb-5 mt-4">
        <h2 className="hero-title">Get In <span className="name-purple">Touch</span></h2>
        <p className="bio-text">Have a project in mind? Let's build something amazing together.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="glass-card p-5">
    
      <form name="contact" method="POST" data-netlify="true" className="contact-form">
  {/* Ye line Netlify ko batati hai ke ye form submit hona hai */}
  <input type="hidden" name="form-name" value="contact" />
  
  <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
  <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
  <textarea name="message" placeholder="Your Message" required className="contact-textarea"></textarea>
  
  <button type="submit" className="btn-p-fill">Send Message</button>
</form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;