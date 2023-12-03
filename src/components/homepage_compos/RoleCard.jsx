import React from "react";
import classes from "./css/homepageStyles.module.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function RoleCard({ card, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0, y: 0 }}
      animate={
        inView
          ? {
              scale: 1,
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeIn", delay: delay },
            }
          : "hidden"
      }
      whileHover={{
        scale: 1.04,
        transition: { ease: "easeIn", duration: 0.1, damping: 0, stiffness: 0},
      }}
      ref={ref}
      className={classes.oppcard + " pb-6"}
    >
      <div className={"w-full relative " + classes.container}>
        <img className={classes.oppcardimg} src={card.image} alt={card.title} />
        <p>{card.text}</p>
        <div
          className={
            "z-[2] bg-black opacity-[0.5] absolute top-0 left-0 bottom-0 right-0 " +
            classes.overlay
          }
        ></div>
      </div>
      <h2 className={classes.cardcatg + " pl-6 pr-6"}>{card.title}</h2>
      <hr />
      <div className="flex flex-col justify-between h-full pl-3 pr-3 text-justify">
        <a className={classes.oppcardbtn} href="/jobseekerRegister">
          {card.buttonname}
        </a>
      </div>
    </motion.div>
  );
}

export default RoleCard;
