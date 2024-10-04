import React, { useState } from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      type: "web",
      title: "IoT System for Monitoring EKG and Blood Oxygen Level",
      description:
        "Telecare solution with data synchronization between IoT devices and the mobile app for tracking vital signs. The app has an offline mode and is compliant with HIPAA and FDA",
      image:
        "https://www.cleveroad.com/images/portfolio/0c7fd31b0bbe5f0e3736693f4a6fff62758509f7bd7d4f3f0b90eb920ae31654-2x.webp",
    },
    {
      id: 2,
      type: "web",
      title: "Digital Hub of Free Drinks in Pubs With Location Tracking",
      description:
        "Cross-platform solution with daily propositions of free drinks based on user location. The app includes a subscription module, early access features, and an Admin panel",
      image:
        "https://www.cleveroad.com/images/portfolio/c3515cf68ea9bfa97f586fbc91a84d85b213157a9b883e87e82ee1d5ccd6dd01-2x.webp",
    },
    {
      id: 3,
      type: "mobile",
      title: "Property Investment Platform with Advisor Portal",
      description:
        "A digital solution for real estate development investment and loan management. The system is compliant with KYC/AML and a Financial Conduct Authority #722801",
      image:
        "https://www.cleveroad.com/images/portfolio/ac9d3b16080195cf06da35f4bf0384c500362956a7e09186c3f3f5c717bf083a-2x.webp",
    },
    {
      id: 4,
      type: "mobile",
      title: "e-Learning System for Official Certification",
      description:
        "B2C e-learning platform for medical students to get prepared for exams with educator module. The system allows for tracking progress by passing Quizzes and Tests",
      image:
        "https://www.cleveroad.com/images/portfolio/b4d1fa46ffba9c1867471968d3ef1efc1130cc1af5c6aef003d03dbd5db03957-2x.webp",
    },
    {
      id: 5,
      type: "desktop",
      title: "Online Services Ecosystem for Investment Bank",
      description:
        "eBanking software that provides robust automation of internal business processes. The solution includes an account opening system according to KYC and meets the FMIA regulator",
      image:
        "https://www.cleveroad.com/images/portfolio/10f564737d18f4f0a1889094c9c574155a8d3f8153a97fb1372c885120647be1-2x.webp",
    },
    {
      id: 6,
      type: "desktop",
      title: "A Global Social Network Community for Dancers",
      description:
        "A cross-platform social media mobile app for dance fans with VoD functionality, motion tracking algorithms to analyze moves, battles mode, and real-time feedback",
      image:
        "https://www.cleveroad.com/images/portfolio/38512bd732d215412cdba3bd0c3308fa414863e52f55c27b041701013697dfd2-2x.webp",
    },
    {
      id: 7,
      type: "all",
      title: "Clinic Management System with EMR for Rehab Clinic",
      description:
        "Clinic management platform complying with HIPAA. The solution contains EMR and Customer Portal module, secure e-prescriptions, and an accounting system",
      image:
        "https://www.cleveroad.com/images/portfolio/960adcc19a0e7303d1422e25bd37df840370082923c2d89b720cdee9d95db9b0-2x.webp",
    },
    {
      id: 8,
      type: "all",
      title: "IoT System for Hydration Monitoring in Real Time",
      description:
        "Cross-platform telecare solution based on IoT sensor for tracking human hydration levels from mobile devices. The system is integrated with PaaS and meets FDA",
      image:
        "https://www.cleveroad.com/images/portfolio/f97ac60b3007160813f891a6320dc2d698fd63c7399ddfaa7f188d68eb0f38df-2x.webp",
    },
  ];

  const handleFilter = (type) => {
    setFilter(type);
  };

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.type === filter
  );

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Our Recent Projects</h2>
      <p className="portfolio-subtitile">
        Discover EnvoCode’s's experience through successful case studies of
        created customized solutions that enabled our clients to achieve their
        business goals and boost workflow efficiency through digitalization
      </p>
      <div className="portfolio-button-group">
        <button
          onClick={() => handleFilter("all")}
          className="portfolio-button"
        >
          Show All
        </button>
        <button
          onClick={() => handleFilter("web")}
          className="portfolio-button"
        >
          Web Projects
        </button>
        <button
          onClick={() => handleFilter("mobile")}
          className="portfolio-button"
        >
          Mobile Projects
        </button>
        <button
          onClick={() => handleFilter("desktop")}
          className="portfolio-button"
        >
          Desktop Projects
        </button>
      </div>
      <div className="portfolio-project-list">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-project-card">
            <div className="portfolio-project-images">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-project-image"
              />
            </div>
            <div>
              <h3 className="portfolio-project-title">{project.title}</h3>
              <p className="portfolio-project-description">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="estimate-section">
        <div className="estimate-detailes">
          <div className="estimate-details-subtitlte">
            <h2 className="estimate-title">Free Estimate</h2>
            <p className="estimate-description">
              Find out the cost of your project!
            </p>
            <p className="estimate-description-subtitile">
              Contact us and get a<br></br> free quotation for your project.
            </p>
            <Link to="/contact">
              <button className="estimate-button">Get an Estimate</button>
            </Link>
          </div>
        </div>
        <div className="estimate-img">
          <img src="https://codeagency.pl/wp-content/uploads/2022/11/Promo_6.png.webp" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
