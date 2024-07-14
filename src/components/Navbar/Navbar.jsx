import React from "react";
import {
  IoHomeOutline,
  IoHome,
  IoCarSportOutline,
  IoCarSport,
  IoBriefcaseOutline,
  IoBriefcase,
  IoChatbubbles,
  IoChatbubblesOutline,
  IoSettingsOutline,
  IoSettings,
} from "react-icons/io5";

import Profile from "../../assets/images/profile.png";
import classes from "./Navbar.module.css";
import IconButton from "../IconButton/IconButton";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.iconContainer}>
        <IconButton Regular={IoHomeOutline} Solid={IoHome} />
        <IconButton Regular={IoCarSportOutline} Solid={IoCarSport} />
        <IconButton Regular={IoBriefcaseOutline} Solid={IoBriefcase} />
        <IconButton Regular={IoChatbubblesOutline} Solid={IoChatbubbles} />
        <IconButton Regular={IoSettingsOutline} Solid={IoSettings} />
      </div>
      <div>
        <button className={classes.profileButton}>
          <img src={Profile} alt="profile" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
