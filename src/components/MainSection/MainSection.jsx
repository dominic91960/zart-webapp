import React from "react";
import classes from "./MainSection.module.css";
import Greet from "../Greet/Greet";
import HotCollections from "../HotCollections/HotCollections";

const MainSection = () => {
  return (
    <section className={classes.main}>
      <Greet />
      <HotCollections />
      <div>table</div>
    </section>
  );
};

export default MainSection;
