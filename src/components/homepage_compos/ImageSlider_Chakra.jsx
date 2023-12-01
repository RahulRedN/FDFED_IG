import React, { useState } from "react";
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
  autoplaySpeed: 2000,
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
      text: "",
      image: "images/trust_hands_promise.jpg",
    },
    {
      title: "2",
      text: "",
      image: "images/team_sitting_on_steps_dicussing.jpg",
    },
    {
      title: "3",
      text: "",
      image: "images/team_consultancy.jpg",
    },
    {
      title: "4",
      text: "",
      image: "images/woman_with_laptop.jpg",
    },
    {
      title: "5",
      text: "",
      image: "images/group_discussing.jpg",
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
            {/* This is the block you need to change, to customize the caption */}
            <div>
              <img src={card.image}></img>
              {/* <p style={{ position: "absolute", top: "20%", fontSize: "3rem" }}>
                Hello Trending topics here for you
              </p> */}
            </div>
          </Box>
        ))}
      </Slider>
    </Box>
  );
  {
    /* <Container size="container.lg" height="85vh" position="relative">
    <Stack
      spacing={6}
      w={'full'}
      maxW={'lg'}
      position="absolute"
      top="50%"
      transform="translate(0, -50%)">
      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
        {card.title}
      </Heading>
      <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
        {card.text}
      </Text>
    </Stack>
  </Container> */
  }
}
