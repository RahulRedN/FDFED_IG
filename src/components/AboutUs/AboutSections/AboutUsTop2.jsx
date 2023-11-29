import AboutUsTop2Cards from "./AboutUsTop2Cards";
import "../AboutSections/Styles/AboutUsTop2.css";

const AboutUsTop2 = () => {
  return (
    
    <div className="AboutUsTop2">
      <div className="WhatWeServe">
        <h3>What We Serve</h3>
        <h2>
          We help You To Find <br />
          The Right Choice
        </h2>
        <p>Quisque eu diam a mi vulputate lacinia. Aliquam eros neque, luctus ut ligula in, faucibus fermentum sem.Nulla varius auctor varius. Mauris erat nisl, aliquet sed libero et, ultrices venenatis nunc..</p>
      </div>

      <div className="AboutUsTop2CardsContainer">
        <AboutUsTop2Cards />
      </div>
    </div>
   
  );
};

export default AboutUsTop2;
