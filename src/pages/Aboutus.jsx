import "../Styles/AboutUs.css";
import { Link } from "react-router-dom";
import Testimonial from "../components/AboutUs/Testimonial/Testimonial";
import QuesCards from "../components/AboutUs/TeamCard/QuesCards";
import AboutUsTop from "../components/AboutUs/AboutSections/AboutUsTop";
import AboutUsTop2 from "../components/AboutUs/AboutSections/AboutUsTop2";
import AboutUsTop3 from "../components/AboutUs/AboutSections/AboutUsTop3";
import Services from "../components/AboutUs/AboutSections/Services";
import Aboutusimg from "../components/AboutUs/AboutSections/Aboutusimg";
// import aboutustopimg from "../Resources/aboutus-top.jpg"

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <div className="top-container">
        <h1> About Us </h1>
        <div>
          <p>
            <Link className="top-p-link" to="/">
              Home
            </Link>{" "}
            {"  >  "}
            <span>About Us</span>
          </p>
        </div>

        {/* 
        <button className='top-conatiner-btn'> conatact us </button> */}

        {/* <img  className='top-container-img' src={aboutustopimg} alt="" /> */}
      </div>

      <AboutUsTop />
      <div className="top2-top3">
      <AboutUsTop2 />
      <AboutUsTop3 />
      </div>
      <Aboutusimg />

      <Services />

      {/* <div className="aboutus-card">
      
      
          </div> */}
      {/* 
      <div className="range-vis">
        <h1>write a visualization with range about our company </h1>

      </div>
      
      <div className="about-com">
        <h1>23 + Years Helping Business</h1>
        <h1>250 + Working Employees</h1>
        <h1>4500 + Complete Projects</h1>
        <h1>3000 + Happy Customers</h1>
        <h2>write all those things with the background image with no fixed position</h2>
      </div> */}

      {/* <div className="testmonials"> */}
        <Testimonial />

        {/* <h1>testimonials section with feedback </h1>
      </div> */}

      <QuesCards />

      {/* <div className="company-img-list">   
        <h1>Our trusted companies </h1>
      </div> */}
    </div>
  );
};

export default AboutUs;
