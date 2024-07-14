import classes from "./HotCollection.module.css";
import ProductCard from "../ProductCard/ProductCard";
import LandRoverLogo from "../../assets/images/land-rover-logo.svg";
import Evoque from "../../assets/images/evoque.png";
import NissanLogo from "../../assets/images/nissan-logo.svg";
import GTR from "../../assets/images/gtr.png";

const HotCollections = () => {
  const products = [
    {
      brandLogo: LandRoverLogo,
      brandTitle: "Range Rover",
      modelName: "Evoque",
      modelImage: Evoque,
      price: "38,700",
      cc: "1997 CC",
      bhp: "246.74 BHP",
      speed: "6 Speed",
      cylinders: "4 Cylinder",
      totalRun: "12500km",
      style: { backgroundColor: "#F2D6C1" },
      bhpStyle: { width: "30%", height: "29%", backgroundColor: "#F8FBE6" },
      totalRunStyle: {
        width: "100%",
        height: "20%",
        backgroundColor: "#F2FBF6",
        flexDirection: "row",
      },
    },
    {
      brandLogo: NissanLogo,
      brandTitle: "Nissan GTR",
      modelName: "R35 Nismo",
      modelImage: GTR,
      price: "187,900",
      cc: "3799 CC",
      bhp: "591.4 BHP",
      speed: "6 Speed",
      cylinders: "6 Cylinder",
      totalRun: "9254km",
      style: { backgroundColor: "#F7F7F7" },
      bhpStyle: { width: "30%", height: "29%", backgroundColor: "#E5EBFB" },
      totalRunStyle: {
        width: "100%",
        height: "20%",
        backgroundColor: "#BBE9BE",
        flexDirection: "row",
      },
    },
  ];
  return (
    <div className={classes.mainContainer}>
      <h3>🔥 Hot Collections</h3>
      <div className={classes.cardContainer}>
        {products.map(
          (
            {
              brandLogo,
              brandTitle,
              modelName,
              modelImage,
              price,
              cc,
              bhp,
              speed,
              cylinders,
              totalRun,
              style,
              bhpStyle,
              totalRunStyle,
            },
            index
          ) => (
            <ProductCard
              key={index}
              logo={brandLogo}
              title={brandTitle}
              name={modelName}
              image={modelImage}
              price={price}
              cc={cc}
              bhp={bhp}
              speed={speed}
              cylinders={cylinders}
              total={totalRun}
              style={style}
              bhpStyle={bhpStyle}
              runStyle={totalRunStyle}
            />
          )
        )}
      </div>
    </div>
  );
};

export default HotCollections;
