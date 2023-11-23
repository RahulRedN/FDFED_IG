import React from 'react'

import classes from "./JobSeeker.module.css";

const Home = () => {
  return (
    <div className={classes.sliderContainer}>
      <div className={classes.sliderText}>
        <div className={classes.sliderCaption}>
          <span>Easiest way to find a perfect job</span>
          <h1>Find Your Next Dream Job</h1>
        </div>
        <div className={classes.sliderButtons}>
          {" "}
          <button>LOOKING FOR A JOB?</button>
        </div>
      </div>
      <div className={classes.sliderBG1}>
        <img src="/assets/bg-1.webp" alt="bg1" />
      </div>
      <div className={classes.sliderBG2}>
        <img src="/assets/bg-2.webp" alt="" />
      </div>
    </div>
  );
}

export default Home