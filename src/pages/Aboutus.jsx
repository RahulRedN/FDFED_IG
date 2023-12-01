import "../Styles/AboutUs.css";
import { Link } from "react-router-dom";
import Testimonial from "../components/AboutUs/Testimonial/Testimonial";
import QuesCards from "../components/AboutUs/TeamCard/QuesCards";
import AboutUsTop from "../components/AboutUs/AboutSections/AboutUsTop";
import AboutUsTop2 from "../components/AboutUs/AboutSections/AboutUsTop2";
import AboutUsTop3 from "../components/AboutUs/AboutSections/AboutUsTop3";
import Services from "../components/AboutUs/AboutSections/Services";
import Aboutusimg from "../components/AboutUs/AboutSections/Aboutusimg";

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <div className="top-container">
        <h1> About Us </h1>
        <div>
          <p>
            <Link className="top-p-link" to="/">
              Home
            </Link>
            <span
              style={{
                fontWeight: "1000",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              {"  >  "}
            </span>
            <span>About Us</span>
          </p>
        </div>
      </div>

      <AboutUsTop />
      <div className="top2-top3">
        <AboutUsTop2 />
        <AboutUsTop3 />
      </div>
      <Aboutusimg />

      <Services />

      <Testimonial />

      <QuesCards />
    </div>
  );
};

export default AboutUs;
