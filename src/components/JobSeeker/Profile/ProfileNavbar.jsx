import classes from "./ProfileNavbar.module.css";

import { FaBell, FaSearch } from "react-icons/fa";
import { IoMail, IoPerson } from "react-icons/io5";

const ProfileNavbar = () => {
  return (
    <nav className={classes.container}>
      <div className={classes.search}>
        <input type="text" placeholder="search anything" />
        <FaSearch />
      </div>
      <div className={classes.content}>
        <span>
          <FaBell size={20} />
        </span>
        <span>
          <IoMail size={20} />
        </span>
        <div className={classes.userInfo}>
          <span>
            <IoPerson size={20} />
          </span>
          <h5>Name</h5>
        </div>
      </div>
    </nav>
  );
};

export default ProfileNavbar;
