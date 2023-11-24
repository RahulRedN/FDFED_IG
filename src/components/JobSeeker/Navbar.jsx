import React from "react";

import { Link } from "react-router-dom";

import classes from "./JobSeeker.module.css";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ navClass }) => {
  return (
    <nav className={navClass}>
      <span>Inspiring Go</span>
      <ul className={classes.items}>
        <li>
          <Link to="">HOME</Link>
        </li>
        <li>
          <Link to="findjobs">BROWSE JOB</Link>
        </li>
        <li>
          <Link to="/jobseeker">CONTACT</Link>
        </li>
      </ul>
      <span style={{fontSize: "2rem"}}>
        <CgProfile />
      </span>
    </nav>
  );
};

export default Navbar;
