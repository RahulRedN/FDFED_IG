import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";

import classes from "../components/JobSeeker/JobSeeker.module.css"

import Navbar from "../components/JobSeeker/Navbar";

const JobSeeker = () => {
  const [navClass, setNavClass] = useState(classes.navbar);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 400) {
        setNavClass(`${classes.navbar} ${classes.sticky}`);
      } else {
        setNavClass(classes.navbar);
      }
    };
  }, []);

  return (
    <>
      <Navbar navClass={navClass} />
      <Outlet />
    </>
  );
};

export default JobSeeker;
