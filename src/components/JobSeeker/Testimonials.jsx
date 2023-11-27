import React from "react";

import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

import TestimonialCard from "./cards/TestimonialCard";

import classes from "./Testimonials.module.css";

const Testimonials = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        <img src="/assets/bg-3.webp" alt="" />
        <Box
          position={"relative"}
          width={"50vw"}
          height={"fit-content"}
          padding={"1rem"}
        >
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <Slider {...settings}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Slider>
        </Box>
      </div>
      <div className={classes.backdrop}></div>
    </div>
  );
};

export default Testimonials;
