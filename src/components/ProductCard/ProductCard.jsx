import { BsFillLightningChargeFill, BsArrowsVertical } from "react-icons/bs";
import { FaDroplet, FaCar } from "react-icons/fa6";
import { PiEngine } from "react-icons/pi";

import classes from "./ProductCard.module.css";
import Stat from "../Stat/Stat";

const ProductCard = ({
  logo,
  title,
  name,
  image,
  price,
  cc,
  bhp,
  speed,
  cylinders,
  total,
  style,
  bhpStyle,
  runStyle,
}) => {
  return (
    <div className={classes.card} style={style}>
      <div className={classes.mainInfo}>
        <div className={classes.model}>
          <img src={logo} alt="Land Rover Logo" />
          <div className={classes.modelName}>
            <h4>{title}</h4>
            <p className={classes.light}>{name}</p>
          </div>
        </div>
        <img src={image} alt="Land Rover Evoque" />
        <div className={classes.priceInfo}>
          <p className={classes.light}>ASKING PRICE</p>
          <h2>
            ${price} <span className={classes.light}>USD</span>
          </h2>
        </div>
      </div>
      <div className={classes.statsContainer}>
        {/* CC */}
        <Stat
          style={{ width: "30%", height: "25%", backgroundColor: "#FCE1CC" }}
          dispText={cc}
        >
          <BsFillLightningChargeFill />
        </Stat>
        {/* BHP */}
        <Stat style={bhpStyle} dispText={bhp}>
          <BsArrowsVertical />
        </Stat>
        {/* SPEED */}
        <Stat
          style={{ width: "30%", height: "25%", backgroundColor: "#EAE9B1" }}
          dispText={speed}
        >
          <FaDroplet />
        </Stat>
        {/* CYLINDER */}
        <Stat
          style={{ width: "30%", height: "21%", backgroundColor: "#D3DAE4" }}
          dispText={cylinders}
        >
          <PiEngine />
        </Stat>
        {/* TOTAL */}
        <Stat style={runStyle} dispText="Total Run: " dispLight={total}>
          <FaCar />
        </Stat>
      </div>
    </div>
  );
};

export default ProductCard;
