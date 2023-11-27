import { useState, useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";

import classes from "../components/JobSeeker/JobSeeker.module.css";

import Navbar from "../components/JobSeeker/Navbar";
import Footer_Job from "../components/JobSeeker/Footer_Job";

const JobSeeker = () => {
  const { pathname } = useLocation();
  const [navClass, setNavClass] = useState(classes.navbar);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      <Footer_Job />
    </>
  );
};

export default JobSeeker;
