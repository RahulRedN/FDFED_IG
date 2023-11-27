import React from "react";

import { IoPersonCircle } from "react-icons/io5";

import classes from "../Testimonials.module.css";

const TestimonialCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.info}>
        <img src="/assets/quotes-sign.webp" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          consequuntur laudantium perferendis? Velit libero nobis beatae ea,
          dolor odio delectus atque vel illo voluptatum quas, ipsa
          reprehenderit. Quos, labore nobis!
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
