import "../Styles/AboutUs.css";
import { Link } from "react-router-dom";
import Testimonial from "../components/AboutUs/Testimonial/Testimonial";
import QuesCards from "../components/AboutUs/TeamCard/QuesCards";
import AboutUsTop from "../components/AboutUs/AboutSections/AboutUsTop";
import AboutUsTop2 from "../components/AboutUs/AboutSections/AboutUsTop2";
import AboutUsTop3 from "../components/AboutUs/AboutSections/AboutUsTop3";
import Services from "../components/AboutUs/AboutSections/Services";
import Aboutusimg from "../components/AboutUs/AboutSections/Aboutusimg";
import ImageHeader from "../components/JobSeeker/ImageHeader";

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <ImageHeader src = {"aboutus"}/>

      <AboutUsTop />
      <div className="top2-top3">
        <AboutUsTop2 />
        <AboutUsTop3 />
      </div>
      <Aboutusimg />

      <Services />
      {/* <Testimonial /> */}

      <QuesCards />
    </div>
  );
};

export default AboutUs;
