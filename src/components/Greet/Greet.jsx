import React from "react";
import classes from "./Greet.module.css";
import { CiSearch } from "react-icons/ci";

const Greet = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.greeting}>
        <h3>Good Morning guys,</h3>
        <h1>Jeff Reeves</h1>
      </div>
      <div className={classes.searchBar}>
        <CiSearch className={classes.searchBarIcon} />
        <p>Search here</p>
      </div>
    </div>
  );
};

export default Greet;
