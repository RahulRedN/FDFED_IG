import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classes from "./TopJobCard.module.css";

const TopJobCard = ({ sticker }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      className={classes.card}
      initial={{ x: 100, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : "hidden"}
      ref={ref}
      transition={{
        ease: "easeIn",
        duration:0.3,
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0, ease: "easeInOut" } }}
    >
      <div className={classes.logo}>
        <img src="/assets/job.svg" alt="Logo" />
      </div>
      <div className={classes.serviceInfo}>
        <h1>Design & Creativity</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum
          mollitia obcaecati ratione veritatis.
        </p>
        <a>Apply Now</a>
      </div>
      {sticker ? <div className={classes.sticker}>Remote</div> : ""}
    </motion.div>
  );
};

export default TopJobCard;
