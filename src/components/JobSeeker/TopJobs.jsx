import React from "react";

import Slider from "react-slick";

import classes from "./TopJobs.module.css";

const TopJobs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <span>100+</span>
        <h1>Browse From Our Top Jobs</h1>
      </div>
      <div className={classes.topJobs}>
        <Slider {...settings}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </Slider>
      </div>
    </div>
  );
};

export default TopJobs;
