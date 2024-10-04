import React from "react";
import "./PricingSection.css";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section className="pricing">
      <div className="pricing-text">
        <h2 className="pricing-title">
          Choose the Best Plan that <br></br>Fits Your Requirements
        </h2>
        <p className="pricing-description">
          At Envocode, we believe in offering competitive pricing without
          compromising on quality. Our transparent pricing model ensures that
          you understand every aspect of the cost involved, with no hidden fees.
        </p>
        <Link to="/contact">
          <button className="get-quote">Get Your Free Quote</button>
        </Link>
      </div>
      <div>
        <img
          src="https://envocode.com/wp-content/uploads/2024/02/Value-for-money-services-at-envocode.webp"
          alt=""
        />
      </div>
    </section>
  );
};

export default PricingSection;
