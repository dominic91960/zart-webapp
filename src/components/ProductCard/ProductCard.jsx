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
}) => {
  return (
    <div className={classes.card}>
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
        <Stat dispText={cc}>
          <BsFillLightningChargeFill />
        </Stat>
        <Stat style={{ width: "30%", height: "29%" }} dispText={bhp}>
          <BsArrowsVertical />
        </Stat>
        <Stat dispText={speed}>
          <FaDroplet />
        </Stat>
        <Stat style={{ width: "30%", height: "21%" }} dispText={cylinders}>
          <PiEngine />
        </Stat>
        <Stat
          style={{ width: "100%", height: "20%", flexDirection: "row" }}
          dispText="Total Run: "
          dispLight={total}
        >
          <FaCar />
        </Stat>
      </div>
    </div>
  );
};

export default ProductCard;
