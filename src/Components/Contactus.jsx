import React from "react";
import "./Contactus.css";
import Tilt from "react-parallax-tilt";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contactus = () => {
  return (
    <>
      <div className="contact-us-container">
        <div className="contact-us-section">
          <h2 className="contact-us-section-title">We Are The Best</h2>
          <p className="contact-us-section-subtitle">
            {" "}
            Join Our Team to Create The Best<br></br>Digital Solutions.
          </p>
          <p className="contact-us-section-subtitle-two">
            We understand the challenges of today’s digital domain and are here
            to help you steer it seamlessly. Let’s leverage technology and
            innovation to propel your business forward.
          </p>
        </div>
        <div className="contact-us-content">
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="tilt-box">
            <div className="contact-us-card">
              <h2>Contact Us</h2>
              <p>
                We’d love to hear from you! Let’s discuss your goals and how we
                can help achieve them.
              </p>
              <form className="contact-us-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="contact-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="contact-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="contact-input"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    className="contact-input"
                  ></textarea>
                </div>
                <button className="submit-button" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </Tilt>

          <div className="contact-details">
            <h3>Our Headquarters</h3>
            <p>4,5 Block L, Abdul Haque Rd, Lahore, Pakistan</p>
            <h3>Contact Info</h3>
            <p>Email: info@envocode.com | Phone: +92 309-08-55-822</p>

            <h3>Connect with Us</h3>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
