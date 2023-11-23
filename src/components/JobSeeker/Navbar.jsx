import React from 'react'

import { Link } from 'react-router-dom';

import classes from "./JobSeeker.module.css"

const Navbar = ({navClass}) => {
  return (
    <nav className={navClass}>
      <span>Inspiring Go</span>
      <ul className={classes.items}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="findjobs">BROWSE JOB</Link>
        </li>
        <li>
          <Link to="/jobseeker">CONTACT</Link>
        </li>
        <li>
          <Link to="/jobseeker">PROFILE</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar