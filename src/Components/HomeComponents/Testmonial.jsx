import React, { useState } from "react";
import "./Testmonial.css";

const Testmonial = () => {
  const TestmonialDetails = [
    {
      id: 1,
      text: `"EnvoCode has been a game-changer for our business. Their team's expertise in web development and dedication to timely delivery helped us launch our project ahead of schedule. Their hands-on approach and attention to detail made all the difference. Highly recommended for any digital solutions!"`,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/Marina-Bashir-Client-225x300.webp",
      Name: "Marina Bashir",
      Designation: "CEO, Marina's Closet",
    },

    {
      id: 2,

      text: `“They delivered a high-quality product and their customer service was excellent. We’ve had other teams approach us, asking to use it for their own projects”.`,
      imgUrl: " https://d1foa0aaimjyw4.cloudfront.net/image_115_380377ad8a.png",
      Name: "Alice Danon",
      Designation: "Project Coordinator, World Bank",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % TestmonialDetails.length
      );
      setAnimating(false);
    }, 600);
  };

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + TestmonialDetails.length) % TestmonialDetails.length
      );
      setAnimating(false);
    }, 600);
  };

  const data = TestmonialDetails[currentIndex];
  return (
    <>
      <div className="testmonial-main">
        <div className="test-sub">
          <div className="main-text">
            <div className="testmonial-heading">
              <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.8012 8.23717C11.7712 8.31051 11.7262 8.37884 11.667 8.43801L11.6637 8.44217L9.13953 10.958C9.01787 11.0797 8.85786 11.1405 8.69786 11.1405C8.53786 11.1405 8.37786 11.0788 8.25536 10.9563C8.01203 10.7122 8.01287 10.3163 8.25703 10.073L9.71203 8.62217L4.77286 8.62217C4.42786 8.62217 4.14786 8.34217 4.14786 7.99717C4.14786 7.65217 4.42786 7.37217 4.77286 7.37217L9.71037 7.37217L8.25703 5.92634C8.01287 5.68217 8.01203 5.28634 8.25536 5.04217C8.4987 4.79717 8.89453 4.79717 9.13953 5.03967L11.6629 7.55218L11.667 7.55634C11.7262 7.61468 11.7704 7.68301 11.8012 7.75634C11.832 7.83051 11.8495 7.91134 11.8495 7.99717C11.8495 8.08217 11.832 8.16384 11.8012 8.23717ZM7.9987 0.0830078C3.63286 0.0830078 0.0820313 3.63467 0.0820313 7.99967C0.0820313 12.3647 3.63286 15.9163 7.9987 15.9163C12.3637 15.9163 15.9154 12.3647 15.9154 7.99967C15.9154 3.63467 12.3637 0.0830078 7.9987 0.0830078Z' fill='%23121212'/%3E%3C/svg%3E" />
              <h3>Testimonials</h3>
            </div>
          </div>
          <div className="horizontal-line"></div>
          <div className="message">
            <p className={`text-container ${animating ? "slide" : ""}`}>
              {data.text}
            </p>
          </div>
          <div className="identity">
            <div className="left-text">
              <img src={data.imgUrl} alt="profile" />
              <div className="details">
                <p>{data.Name}</p>
                <p>{data.Designation}</p>
              </div>
            </div>
            <div className="right-det">
              <div className="arrow-buttons">
                <button className="arrow-button left" onClick={handlePrev}>
                  &#9664;
                </button>
                <div className="count">
                  <p>{`${currentIndex + 1}`}</p>
                  <p>/</p>
                  <p>{TestmonialDetails.length}</p>
                </div>
                <button className="arrow-button right" onClick={handleNext}>
                  &#9654;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testmonial;
