import { useState, useEffect } from "react";

import classes from "../components/homepage_compos/css/Navbar_Home_Styles.module.css";

import Footer_Job from "../components/homepage_compos/Footer_Job";

import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Company/Sidebar.jsx";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../components/Company/theme.js";
import Topbar from "../components/Company/Topbar.jsx";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isLink = (path) => {
    return path === pathname;
  };

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="flex">
            <Sidebar isSidebar={isSidebar} />
            <main className="w-full "> 
            <Outlet />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default Home;
