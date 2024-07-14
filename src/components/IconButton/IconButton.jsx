import React from "react";

import classes from "./IconButton.module.css";

const IconButton = ({ Regular, Solid }) => {
  return (
    <div className={classes.iconButton}>
      <Regular className={classes.iconOutline} />
      <Solid className={classes.iconSolid} />
    </div>
  );
};

export default IconButton;
