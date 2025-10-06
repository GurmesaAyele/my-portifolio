import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="container contact" data-aos="fade-up">
      <h2>Contact</h2>

      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message"
          rows={5}
          required
        ></textarea>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>

      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:youremail@example.com">Email</a>
      </div>
    </section>
  );
};

export default Contact;
