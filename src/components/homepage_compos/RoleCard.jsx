import React from "react";
import classes from "./homepageStyles.module.css";
function RoleCard({ card }) {
  return (
    <div className={classes.oppcard+" "}>
        <img className={classes.oppcardimg} src={card.image} alt={card.title} />
        <h2 className={classes.cardcatg}>{card.title}</h2>
        <p>{card.text}</p>
        <a className={classes.oppcardbtn} href="/jobseekerRegister">
          {card.buttonname}
        </a>
      </div>
  );
}

export default RoleCard;
