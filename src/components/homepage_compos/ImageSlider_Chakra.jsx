import React, { useState } from "react";
import classes from  "../JobSeeker/ImageHeader.module.css";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";

import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "1",
      header:  <h1 className="text-[1.8rem] font-[700] tracking-wider">
        Leading Tech Companies, including Google and Amazon, <br/>Announce Massive Hiring Initiatives in 2023.</h1>,
      tagline :"- Tech giants are gearing up for expansion, creating numerous job opportunities for skilled professionals.",
      image: "images/trust_hands_promise.jpg",
      top :"-37%",
      right:0
    },
    {
      title: "2",
      header: <h1 className="text-[1.8rem] font-[700] tracking-wider">Remote Work Here to Stay:<br/> Survey Reveals 80% of Companies Embrace Flexible Work Models.</h1>,
      tagline :"- The shift towards remote work continues, impacting job seekers' preferences and companies' hiring strategies.",
      image: "images/team_sitting_on_steps_dicussing.jpg",
      top :"-37%",
      right:0
    },
    {
      title: "3",
      header: <h1 className="text-[1.8rem] font-[700] tracking-wider">Startups Flourish in 2023:<br/>Emerges as a Hub for Innovation and New Job Opportunities.</h1>,
      tagline :"- The startup scene is thriving, with emerging companies attracting both talent and investors.",
      image: "images/team_consultancy.jpg",
      top :"-37%",
      right:0
    },
    {
      title: "4",
      header: <h1 className="text-[1.8rem] font-[700] tracking-wider">Companies Prioritize Diversity:<br/>Zoho Sets New Standards in Inclusive Hiring Practices</h1>,
      tagline :"- Diversity and inclusion take center stage as companies recognize the importance of a varied and equitable workforce.",
      image: "images/woman_with_laptop.jpg",
      top :"-37%",
      right:0
    },
    {
      title: "5",
      header: <h1 className="text-[1.8rem] font-[700] tracking-wider">Tech Companies Revolutionize Hiring:<br/>Media.net Introduces Gamified Interview Process</h1>,
      tagline :"- Companies are adopting creative and innovative recruitment methods to attract top talent.",
      image: "images/group_discussing.jpg",
      top :"-37%",
      right:0
    },
  ];

  return (
    <Box
      position={"relative"}
      left={"0"}
      right={"0"}
      margin={"auto"}
      marginTop={"0rem"}
      width={"100vw"}
      height={"85vh"}
      overflow={"hidden"}
      backgroundPosition={"center"}
      backgroundColor={" antiquewhite"}
      border={"0px solid black"}
      borderRadius={"0 0 10px 10px"}
    >
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        //variant="ghost" //gives no background for arrow icon
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <ArrowLeftIcon />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        // variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <ArrowRightIcon />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          >
            <div>
              <div className="w-full">
                <div className="bg-[#092a49] w-full h-full">
                  <img src={card.image} alt="Contact Us" className={classes.image} />
                  <div className={ "absolute top-[-50%] inset-0 flex flex-col gap-8 text-white items-center justify-center"}>
                      {card.header}
                    <div className="flex items-center gap-3 text-[1.3rem]">
                      {card.tagline}
                    </div>
                  </div>
                </div>
              </div>
              {/* <p style={{ position: "absolute", top: "20%", fontSize: "3rem" }}>
                Hello Trending topics here for you
              </p> */}
            </div>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
