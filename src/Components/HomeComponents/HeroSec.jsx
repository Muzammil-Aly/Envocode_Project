import React from "react";
import { Link } from "react-router-dom";
import "./HeroSec.css";

const HeroSec = () => {
  return (
    <div className="hero-sec">
      <div className="sub-container">
        <h1 className="main-heading">
          Your search for best<br></br> software house ends here
        </h1>
        <div>
          <p className="hero-sec-text">
            Welcome to Envocode, where your vision meets the future of
            technology. In the bustling digital landscape of Lahore, we stand
            out by offering state-of-the-art Software Development, SEO
            optimization, App Development, Web Development, and Graphic
            Designing services.
          </p>
        </div>
        <div className="Hero-sec-buttons">
          <Link to="/services" className="Hero-sec-button">
            Explore Our Services
          </Link>
        </div>
      </div>
      <div className="Hero-sec-imgs">
        <img
          src="https://envocode.com/wp-content/uploads/2024/01/best-software-house-in-lahore.webp"
          alt="Envocode Software House"
        />
      </div>
    </div>
  );
};

export default HeroSec;
