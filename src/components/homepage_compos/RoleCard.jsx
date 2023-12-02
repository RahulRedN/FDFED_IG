import React from "react";
import classes from "./homepageStyles.module.css";
function RoleCard({ card }) {
  return (
    <div className={classes.oppcard + " pb-6"}>
      <img className={classes.oppcardimg} src={card.image} alt={card.title} />
      <h2 className={classes.cardcatg + " pl-6 pr-6"}>{card.title}</h2>
      <hr />
      <div className="flex flex-col justify-between h-full pl-3 pr-3 text-justify">
        <p className="text-gray-500">{card.text}</p>
        <a className={classes.oppcardbtn} href="/jobseekerRegister">
          {card.buttonname}
        </a>
      </div>
    </div>
  );
}

export default RoleCard;
