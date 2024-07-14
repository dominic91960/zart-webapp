import React from "react";
import classes from "./Stat.module.css";

const Stat = ({
  style = { width: "30%", height: "25%" },
  children,
  dispText,
  dispLight,
}) => {
  const styledChildren = React.cloneElement(children, {
    className: classes.icon,
    size: 20,
  });
  return (
    <div className={classes.mainContainer} style={style}>
      {styledChildren}
      <p>
        {dispText} <span className={classes.light}>{dispLight}</span>
      </p>
    </div>
  );
};

export default Stat;
