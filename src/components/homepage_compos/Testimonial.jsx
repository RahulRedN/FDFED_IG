import React from "react";
import classes from "./homepageStyles.module.css";
function Testimonial(props) {
  return (
    <>
      <div
        key={props.testimonial.username}
        className={
          props.Idx === props.tIdx ? classes.activ : classes.testimonial_card
        }>
        <div className={classes.review}>
          <p>{props.testimonial.review}</p>
        </div>
        <div className={classes.person}>
          <h3>- {props.testimonial.username}</h3>
          <h5>- - {props.testimonial.currProfession}</h5>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
