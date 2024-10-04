import React, { useState } from "react";
import "./TrainingPrograms.css";

const TrainingPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Front End Development",
      description:
        "Master HTML, CSS, & JavaScript, and create compelling digital experiences.",
      image:
        "https://envocode.com/wp-content/uploads/2024/02/Front-End-Development.webp", // Replace with actual image paths
    },
    {
      id: 2,
      title: "MERN Stack Development",
      description:
        "Learn the full stack with MongoDB, Express.js, React, and Node.js.",
      image:
        "https://envocode.com/wp-content/uploads/2024/02/Mern-Stack-Development.webp",
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "Steer through the digital marketing maze and master online promotion.",
      image:
        "https://envocode.com/wp-content/uploads/2024/02/Digital-Marketing.webp",
    },
    {
      id: 4,
      title: "Graphic Designing & Animation",
      description:
        "Discover the art of visual storytelling and bring your ideas to life.",
      image:
        "https://envocode.com/wp-content/uploads/2024/02/Graphic-Designing.webp",
    },
  ];

  return (
    <div className="training-section">
      <h1 className="section-title">Join Us</h1>
      <h2 className="sub-title">Our Training Programs</h2>
      <p className="intro-text">
        From simplifying intricate processes to designing captivating digital
        interfaces, we’re constantly redefining the boundaries of the possible.
      </p>
      <div className="program-grid">
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <div className="program-inner">
              <div className="program-front">
                <img src={program.image} className="program-image" />
                <h3 className="program-title-outer">{program.title}</h3>
              </div>
              <div className="program-back">
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPrograms;
