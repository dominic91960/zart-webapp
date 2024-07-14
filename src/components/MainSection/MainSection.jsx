import React from "react";
import classes from "./MainSection.module.css";
import Greet from "../Greet/Greet";
import HotCollections from "../HotCollections/HotCollections";
import Collections from "../Collections/Collections";

const MainSection = () => {
  return (
    <section className={classes.main}>
      <Greet />
      <HotCollections />
      <Collections />
    </section>
  );
};

export default MainSection;
