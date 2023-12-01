import "../AboutSections/Styles/AboutUsTop.css";
import TopImage from "../AboutSections/Resources/TopImage.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUsTop = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="AboutUsTop">
      {/* <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : "hidden"}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        className=""
        // key={index}
      > */}
        <img src={TopImage} alt="" />
      {/* </motion.div> */}

      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : "hidden"}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.0}} // Add delay of 0.3 seconds
        className="extra-bg-div"
        // key={index}
      ></motion.div>

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
