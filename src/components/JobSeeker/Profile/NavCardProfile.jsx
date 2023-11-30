import styles from "./NavCardProfile.module.css";

import { Link } from "react-router-dom";

const NavCardProfile = ({ Icons, text, link }) => {
  return (
    <a href={link} className={"w-full hover:bg-blue-400 p-4 " + styles.card}>
      <div
        className={
          "flex items-center ml-10 gap-3"
        }
      >
        {text !== "Back to Home" && <Icons
          size={32}
          className={`fill-white text-blue-500 ` + styles.icon}
        />}
        {text === "Back to Home" && <Icons size={32} className="text-white" />}
        <h1 className="text-white text-xl tracking-wide">{text}</h1>
      </div>
    </a>
  );
};

export default NavCardProfile;
