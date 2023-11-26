import React from "react";

import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

import classes from "./TopJobs.module.css";
import TopJobCard from "./TopJobCard";

const TopJobs = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <span>100+</span>
        <h1>Browse From Our Top Jobs</h1>
      </div>
      <div className={classes.topJobs}>
        <Box
          position={"relative"}
          left={"0"}
          right={"0"}
          padding={"0rem 1rem"}
          width={"100vw"}
          height={"fit-content"}
        >
          {/* CSS files for react-slick */}
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
            <TopJobCard />
            <TopJobCard sticker={true} />
            <TopJobCard />
            <TopJobCard />
            <TopJobCard sticker={true}/>
            <TopJobCard />
          </Slider>
        </Box>
      </div>
    </div>
  );
};

export default TopJobs;
