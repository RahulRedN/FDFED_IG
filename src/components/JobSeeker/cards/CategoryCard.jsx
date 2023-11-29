import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classes from "./CategoryCard.module.css";

const CategoryCard = ({ sticker, delay, title, desc, SVG }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      className={classes.card}
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : "hidden"}
      ref={ref}
      transition={{
        ease: "easeIn",
        duration: 0.3,
        delay: delay,
      }}
    >
      <div className={classes.logo}>
        {SVG}
      </div>
      <div className={classes.serviceInfo}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <a>Browse Job</a>
      </div>
      {sticker ? <div className={classes.sticker}>{sticker}</div> : ""}
    </motion.div>
  );
};

export default CategoryCard;
