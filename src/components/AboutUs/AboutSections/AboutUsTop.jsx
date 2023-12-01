import "../AboutSections/Styles/AboutUsTop.css";
import TopImage from "../AboutSections/Resources/TopImage.jpg";
// import { background } from "@chakra-ui/react";
// import { color } from "framer-motion";

const AboutUsTop = () => {
  return (
    <div className="AboutUsTop">
      <div>
        <img src={TopImage} alt="" />
      </div>
      <div className="extra-bg-div"></div>

      <div className="AboutUsTopContent">
        <h3>Welcome To InspiringGo</h3>
        <h1>We Help Your Company To Grow</h1>
        <p>
          Curabitur pharetra luctus vulputate. Proin finibus odio vel ipsum
          scelerisque, luctus bibendum purus pellentesque. Integer porta dolor
          at consequat maximus. Cras orci nisi, malesuada sed nisl quis, tempus
          tempus eros. Quisque eu diam a mi vulputate lacinia. Aliquam eros
          neque, luctus ut ligula in, faucibus fermentum sem. Vestibulum tempor
          sollicitudin fringilla. .
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default AboutUsTop;
