import React from "react";

import { IoPersonCircle } from "react-icons/io5";

import classes from "../Home/Testimonials.module.css";

const TestimonialCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.info}>
        <img src="/assets/quotes-sign.webp" />
        <p>
        In the realm of UI/UX design, our team is dedicated to crafting seamless and visually appealing user experiences. We believe that design is not just about aesthetics but also about creating interfaces that users love to engage with. Our designers pay meticulous attention to detail, ensuring that every pixel aligns with the overall user journey.
        </p>
      </div>
      <div className={classes.reviewer}>
        <IoPersonCircle size={60}/>
        <div className={classes.name}>
          <span> Name </span>
          <p>UI/UX Designer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
