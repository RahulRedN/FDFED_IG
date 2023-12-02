// TestimonialCard.js

import { useState, useEffect } from "react";
import "../AboutUs/Testimonial/Styles/Testimonialstyles.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TestCard = ({ heading, quote, imageSrc, altText, name }) => {
  const [ref, inView] = useInView();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={
        inView
          ? { opacity: 1, transition: { ease: "easeInOut", duration: 0.6 } }
          : "hidden"
      }
      className="testimonial-card visible"
    >
      <img src={heading} className="testimonial-card-heading-img" />
      <p className="testimonial-card-quote">{quote}</p>
      <img className="testimonial-card-image" src={imageSrc} alt={altText} />
      <p className="testimonial-card-name">{name}</p>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext(); // Auto transition to the next testimonial
    },5000); // Adjust the interval as needed (e.g., 5000 milliseconds = 5 seconds)

    return () => clearInterval(intervalId);
  }, [testimonials, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonial-slider">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`testimonial-card ${
            index === currentIndex ? "visible" : "hidden"
          }`}
        >
          <TestCard
            heading={testimonial.heading}
            quote={testimonial.quote}
            imageSrc={testimonial.imageSrc}
            altText={testimonial.altText}
            name={testimonial.name}
          />
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;

// import React from "react";
// import classes from "./homepageStyles.module.css";
// function Testimonial(props) {
//   return (
//     <>
//       <div
//         key={props.testimonial.username}
//         style={{backgroundColor:props.color}}
//         className={
//           props.Idx === props.tIdx ? classes.activ : classes.testimonial_card
//         }>
//         <div className={classes.review}>
//           <p>{props.testimonial.review}</p>
//         </div>
//         <div className={classes.person}>
//           <h3>- {props.testimonial.username}</h3>
//           <h5>- - {props.testimonial.currProfession}</h5>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Testimonial;
