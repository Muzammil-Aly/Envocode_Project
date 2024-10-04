import React from "react";
import "./Services.css";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaSearch,
  FaPaintBrush,
  FaBullhorn,
  FaPenNib,
} from "react-icons/fa";
import PricingSection from "./HomeComponents/PricingSection";
const Services = () => {
  const services = [
    {
      title: "Web & App Design & Development",
      description:
        "Master the art of online presence with EnvoCode. Our team ensures your website and apps are both stunning and functional.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Ecommerce Development",
      description:
        "EnvoCode offers robust e-commerce solutions. Seamlessly integrate payment processors and offer an unparalleled shopping experience.",
      icon: <FaShoppingCart />,
    },
    {
      title: "Search Engine Optimization",
      description:
        "Stay ahead of the curve with EnvoCode’s cutting-edge SEO strategies, designed to push you to the top.",
      icon: <FaSearch />,
    },
    {
      title: "Graphic Designing",
      description:
        "At EnvoCode, we believe that design is more than just visuals. It’s a strategic response, and with our expertise, your brand’s message is sure to shine.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Social Media Marketing",
      description:
        "Dive into the digital conversation. EnvoCode’s social media strategies ensure your brand stays relevant and engaging.",
      icon: <FaBullhorn />,
    },
    {
      title: "Content Writing",
      description:
        "With EnvoCode, every word counts. Our content resonates with your audience, driving action and engagement.",
      icon: <FaPenNib />,
    },
  ];
  const jobs = [
    {
      title: "Front End Developer",
      description:
        "We are looking for a creative and skilled front-end developer to join our team.",
    },
    {
      title: "Full Stack Developer",
      description:
        "Join us as a full stack developer, working on exciting new projects.",
    },
    {
      title: "UI/UX Designer",
      description:
        "Bring your design skills to life as part of our talented design team.",
    },
  ];

  return (
    <>
      <div id="services-section" className="services-container">
        <header className="services-header">
          <div className="services-title-section">
            <h1 className="service-title">
              Our Different <br></br>
              <span className="m-0">Services</span>
            </h1>
            <p className="service-subtitle">
              Years of Experience in Industry & Managements
            </p>
            <a href="/contact" className="Hero-sec-button ">
              Send Us An Email
            </a>
          </div>
          <div className="services-header-img">
            <img src="https://arbisoft.com/_next/image?url=https%3A%2F%2Fd1foa0aaimjyw4.cloudfront.net%2FGroup_535_487a0b2005.png&w=480&q=100" />
          </div>
        </header>
        <section className="services-we-offer-section">
          <h2 className="services-we-offer-title">Services We Offer</h2>
          <div className="services-we-offer-container">
            {services.map((service, index) => (
              <div key={index} className="services-we-offer-card">
                <div className="services-we-offer-icon">{service.icon}</div>
                <h3 className="services-we-offer-card-title">
                  {service.title}
                </h3>
                <p className="services-we-offer-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <PricingSection />

      <section className="join-our-team">
        <p className="join-our-team-start">Let's Start</p>

        <h2 className="join-our-team-title">
          Join Our Team To Create <br></br>The Best Digital Solutions.
        </h2>
        <p className="join-our-team-subtitle">
          While we ensure affordability, we also guarantee high-quality
          deliverables that maximize your ROI. With Envocode, you’re not just
          paying for a service; you’re investing in a partnership that drives
          growth and innovation.
        </p>

        <div className="job-listing">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-description">{job.description}</p>
              <button className="apply-button">Apply Now</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
