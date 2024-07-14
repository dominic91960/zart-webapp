import CollectionRow from "../CollectionRow/CollectionRow";
import classes from "./Collections.module.css";
import HondaCrv from "../../assets/images/honda-crv.png";
import AudiA6 from "../../assets/images/audi-a6.png";
import AudiQ3 from "../../assets/images/audi-q3.png";
import CClass from "../../assets/images/benz-c-class.png";

const Collections = () => {
  const tableData = [
    {
      modelImage: HondaCrv,
      modelName: "Honda Cr-V 2021",
      totalRun: "22,406/km",
      condition: "Great",
      price: "$30,450",
    },
    {
      modelImage: AudiA6,
      modelName: "Audi A6 2021",
      totalRun: "19,647/km",
      condition: "Need Servicing",
      price: "$54,900",
    },
    {
      modelImage: AudiQ3,
      modelName: "Audi Q3 2019",
      totalRun: "35,000/km",
      condition: "Great",
      price: "$30,695",
    },
    {
      modelImage: CClass,
      modelName: "Mercedez-Benz C-Class 2019",
      totalRun: "17,520/km",
      condition: "Excellent",
      price: "$52,000",
    },
  ];
  return (
    <div className={classes.mainContainer}>
      <h3>Regular Collections</h3>
      <table>
        <tr>
          <th>car model</th>
          <th>total run</th>
          <th>condition</th>
          <th>asking price</th>
          <th></th>
        </tr>
        {tableData.map(
          ({ modelImage, modelName, totalRun, condition, price }, index) => (
            <CollectionRow
              key={index}
              image={modelImage}
              name={modelName}
              total={totalRun}
              condition={condition}
              price={price}
            />
          )
        )}
      </table>
    </div>
  );
};

export default Collections;
