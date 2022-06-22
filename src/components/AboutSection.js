import React from "react";
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or video editing ideas that you have.
          We have professionals with amazing skills to help achieve it.
        </p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img src="../img/home1.png" alt="akasam aks migiram" />
      </div>
    </div>
  );
};
export default AboutSection;