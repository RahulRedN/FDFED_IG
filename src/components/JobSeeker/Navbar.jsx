/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

import classes from "./JobSeeker.module.css";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ navClass }) => {
  return (
    <nav className={navClass}>
      <div className={classes.left}>
        <span>Inspiring Go</span>
        <ul className={classes.items}>
          <li>
            <NavLink to="">HOME</NavLink>
          </li>
          <li>
            <NavLink to="findjobs">BROWSE JOB</NavLink>
          </li>
          <li>
            <NavLink to="contactus">CONTACT</NavLink>
          </li>
        </ul>
      </div>
      <span className={classes.profile}>
        <CgProfile />
      </span>
    </nav>
  );
};

export default Navbar;
