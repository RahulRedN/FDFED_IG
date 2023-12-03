/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import classes from "./css/Navbar_Home_Styles.module.css";

import Avatar from "../JobSeeker/Avatar";

const Navbar = ({ navClass }) => {
  return (
    <nav className={navClass}>
      <div className={classes.left}>
        <div className="flex flex-row items-center">
          <img className={classes.logo} src="/images/IG_logo_Dark.png" alt="Logo" />
          <span><NavLink to="/"> Inspiring Go</NavLink></span>
        </div>
        <ul className={classes.items}>
          <li>
            <NavLink to="aboutus">About us</NavLink>
          </li>
          <li>
            <NavLink to="faqs">FAQS</NavLink>
          </li>
          <li>
            <NavLink to="contactus">CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
