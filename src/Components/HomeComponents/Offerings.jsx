import React, { useState } from "react";
import "./Offerings.css";

const Offerings = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for when a button is clicked
  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
    setCurrentIndex(index);
  };
  const offeringsData = [
    {
      id: 1,
      Heading: "Software Development",
      text: `Envocode specializes in creating custom software solutions that are meticulously crafted to align with your specific business requirements. Our software development ensures scalability, security, and performance to drive your business forward.`,
    },
    {
      id: 2,
      Heading: "Web Development",

      text: `Our web development expertise lies in delivering responsive and dynamic websites using React JS, WordPress and Shopify that offer seamless user experiences. At Envocode, we build platforms that are not just visually appealing but also robust, ensuring your online presence is powerful and effective.`,
    },
    {
      id: 3,
      Heading: "App Development",
      text: `Envocode’s app development service is focused on designing and building intuitive, user-friendly mobile applications. Our apps are optimized for both performance and user engagement, providing your audience with a memorable mobile experience.`,
    },

    {
      id: 4,
      Heading: "Search Engine Optimization",
      text: `With Envocode’s SEO strategies, your brand’s visibility is enhanced through optimized content, keyword relevance, and backlink building, ensuring your business achieves higher rankings and increased organic traffic on search engines.`,
    },
    {
      id: 5,
      Heading: "Web Designing",
      text: `Our web designing services combine creative aesthetics with functionality to create websites that not only look great but are also easy to navigate, providing a compelling and user-centric online experience.`,
    },
    {
      id: 6,
      Heading: "Graphic Designing",
      text: `Graphic designing at Envocode translates your brand’s message into visual art. From logos to layouts, we ensure every graphic element aligns with your brand identity and communicates effectively with your audience.`,
    },
    {
      id: 7,
      Heading: "Content Writing",
      text: `Content is king, and our content writing services reign supreme. At Envocode, we produce compelling, SEO-optimized content that tells your story, engages your target audience, and drives conversions.`,
    },
  ];

  const data = offeringsData[currentIndex];
  return (
    <>
      <div className="offerings-container">
        <div className="Offerings-Heading">
          <h2>
            <span className="our">Our</span>{" "}
            <span className="offerings">Offerings</span>
          </h2>
        </div>
        <div className="offerings-content">
          <div className="offerings-content-child">
            <div className="content-buttons">
              <div className="services-list">
                <button onClick={() => handleButtonClick(0)}>
                  Software Development
                </button>
              </div>
              <div className="services-list">
                <button onClick={() => handleButtonClick(1)}>
                  Web Development
                </button>
              </div>
              <div className="services-list">
                <button onClick={() => handleButtonClick(2)}>
                  App Development
                </button>
              </div>
              <div className="services-list">
                <button onClick={() => handleButtonClick(3)}>
                  Search Engine Optimization
                </button>
              </div>
              <div className="services-list">
                <button onClick={() => handleButtonClick(4)}>
                  Web Designing
                </button>
              </div>
              <div className="services-list">
                <button onClick={() => handleButtonClick(5)}>
                  Graphic Designing
                </button>
              </div>
              <div className="services-list">
                <button onClick={() => handleButtonClick(6)}>
                  Content Writing
                </button>
              </div>
            </div>

            {/* Small button (indicator) */}
            <div className="verical-line-offerings">
              {activeButtonIndex !== null && (
                <div
                  className="small-button"
                  style={{ top: `${activeButtonIndex * 60}px` }}
                ></div>
              )}
            </div>
          </div>

          <div className="offerings-text">
            <h2>{data.Heading}</h2>
            <p>{data.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerings;
