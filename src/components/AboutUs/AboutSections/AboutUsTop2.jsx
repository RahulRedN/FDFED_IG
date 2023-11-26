
import AboutUsTop2Cards from "./AboutUsTop2Cards";
import "../AboutSections/Styles/AboutUsTop2.css"

const AboutUsTop2 = () => {
  return (
    <div className="AboutUsTop2">
      <div className="WhatWeServe">
        <h3>What We Serve</h3>
        <h2>We help You To Find <br />The Right Choice</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      </div>

      <div className="AboutUsTop2CardsContainer">
        <AboutUsTop2Cards />
      </div>
    </div>
  );
};

export default AboutUsTop2;
