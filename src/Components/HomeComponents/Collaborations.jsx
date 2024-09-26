import React from "react";
import "./Collaboration.css";
import Sliderr from "./Sliderr";
import Testmonial from "./Testmonial";
const Collaborations = () => {
  return (
    <>
      <div className="main-container inter-family">
        <div className="Collab-main">
          <div className="Collab-container">
            <h1 className="main-heading-colab inter-family">
              A Journey of <mark className="custom-mark">02 years</mark> with{" "}
              <mark className="custom-mark">55+</mark> projects and{" "}
            </h1>
            <h1 className="Space inter-family">
              <mark className="custom-mark"> 49+</mark> tech partnerships
            </h1>
          </div>
          <div className="card">
            <div className="f-item">
              <div>
                <h3 className="digit-text"> 95%</h3>
                <p className="digit-text-sibling">Client Satisfaction Rate</p>
              </div>
              <div class="vertical-line-colab"></div>
            </div>
            <div className="f-item">
              <div>
                <h3 className="digit-text"> Zero</h3>
                <p className="digit-text-sibling">Detractors</p>
              </div>
              <div class="vertical-line-colab"></div>
            </div>
            <div className="f-item">
              <div>
                <h3 className="digit-text"> 81.8</h3>
                <p className="digit-text-sibling">Net Promoter Score</p>
              </div>
              <div class="vertical-line-colab"></div>
            </div>
            <div className="f-item">
              <div>
                <h3 className="digit-text"> Avg.2 Years</h3>
                <p className="digit-text-sibling">Client Relationship</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-section">
          <Sliderr />
        </div>
      </div>
      <Testmonial />
    </>
  );
};

export default Collaborations;
