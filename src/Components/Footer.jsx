import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-container">
          <img
            src="https://envocode.com/wp-content/uploads/2024/01/envocodelogo-1.png"
            alt="Envocode Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            Envocode is a Software House that excels in crafting unique
            software, innovative web development projects, and intuitive apps.
            Our SEO service amplifies your visibility, and web design captivates
            users and generates leads, while our graphic design and content
            writing distinctly elevate your brand’s story.
          </p>
        </div>
        <div className="footer-links-container">
          <nav className="footer-quick-links">
            <div className="Quick-link-heading">
              <h3>Quick Links</h3>
            </div>

            <div className="Quick-link-columns">
              <div className="Quick-link-column-one">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About Us </a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="Quick-link-column-two">
                <ul className="quic-links-coulmn">
                  <li>
                    <a href="#privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#termsandconditions">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#Disclaimer">Disclaimer</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="footer-social-media-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <form className="footer-contact-form">
          <h2>Contact Us</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit" className="footer-get-started-button">
            Get Started
          </button>
        </form>
      </div>
      <div className="footer-bottom">
        <p>© 2024 | All rights reserved​</p>
        <p>Optimized by Envocode IT Team</p>
      </div>
    </footer>
  );
};

export default Footer;
