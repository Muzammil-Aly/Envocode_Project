import React from "react";
import HERO from "../../projectPics/Statistics.png";

import "./CompanyValues.css";

const CompanyValues = () => {
  const values = [
    {
      icon: "https://envocode.com/wp-content/uploads/2024/02/Project-Deployment.webp",
      title: "Project Handover and Deployment",
      description:
        "We finalize all project deliverables and ensure everything is functioning as per the agreed specifications.",
    },
    {
      icon: "https://envocode.com/wp-content/uploads/2024/02/Feedback-stage-.webp",
      title: "Feedback and Review Session",
      description:
        "We use your feedback to refine your processes and enhance client satisfaction in future projects.",
    },
    {
      icon: "https://envocode.com/wp-content/uploads/2024/02/Support-services.webp",

      title: "Support and Maintenance",
      description:
        "We outline the support and maintenance services and offer post-deployment, including any warranties or service-level agreements.",
    },
  ];

  return (
    <div className="company-section">
      <div className="why-choose-section">
        <div className="why-choose-content">
          <div className="text-content">
            <h2 className="section-title">Why Choose EnvoCode?</h2>
            <p className="why-choose-description">
              In the fast-paced world of digital transformation, Envocode
              emerges as your quintessential Software House in Lahore, renowned
              for its exemplary Software Development, SEO mastery, dynamic App
              Development, innovative Web Development, and creative Graphic
              Designing prowess. Our holistic approach to digital marketing
              solutions is tailored to empower businesses of every scale and
              sector. Whether it’s revamping a website to capture the essence of
              your brand, enhancing your visibility with SEO best practices,
              engaging audiences through social media, or crafting compelling
              content, Envocode stands at the forefront, equipped with expertise
              and dedication to elevate your digital strategy to new heights.
            </p>
            <button className="contact-button">Contact Us</button>
          </div>
          <div className="image-content">
            <img src={HERO} />
          </div>
        </div>
      </div>

      <div className="values-container">
        <h3 className="section-heading ">Work Process</h3>

        <h2 className="section-title">Our Process</h2>

        <p className="our-process-description">
          Whether it’s a website revamp, boosting search engine rankings,
          performance marketing, social media engagement, or compelling content
          creation, EnvoCode possesses the prowess and proficiency to elevate
          your digital game.
        </p>

        <div className="values-grid">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="icon">
                <img src={value.icon} />
              </div>
              <h3 className="title">{value.title}</h3>
              <p className="description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyValues;
