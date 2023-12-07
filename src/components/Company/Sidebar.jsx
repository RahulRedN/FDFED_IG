import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "./theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  Checklist,
  PendingActions,
  PostAdd,
  LogoutSharp,
} from "@mui/icons-material";
import { useAuth } from "../../Firebase/AuthContexts";

const Item = ({ title, to, icon, selected, setSelected, onClickHandler }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        margin: "20px 0 20px 0",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography variant="h4">{title}</Typography>
      <Link to={to} onClick={onClickHandler} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const { logout } = useAuth();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const logoutHandler = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: " 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "20px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                mb="22px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  sx={{ m: "8px 0 0 0" }}
                >
                  Company Name
                </Typography>
                <div className="mt-3">
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    {"Gmail"}
                  </Typography>
                </div>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to=""
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Stats
            </Typography> */}
            <Item
              title="Pending List"
              to="pendinglist"
              icon={<PendingActions />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Employee List"
              to="employeelist"
              icon={<Checklist />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Post a Job"
              to="postjob"
              icon={<PostAdd />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Log Out"
              to="" //private route chks session is actv or not
              icon={<LogoutSharp />}
              selected={selected}
              setSelected={setSelected}
              onClickHandler={logoutHandler}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
