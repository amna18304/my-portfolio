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
            <form>
              <div className="mb-4">
                <input type="text" className="contact-input" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <input type="email" className="contact-input" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <textarea className="contact-input" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button className="btn-p-fill w-100 py-3">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;