import classes from "./CollectionRow.module.css";
import DetailsButton from "../DetailsButton/DetailsButton";

const CollectionRow = ({ image, name, total, condition, price }) => {
  return (
    <tr className={classes.tableRow}>
      <td>
        <div className={classes.modelColumn}>
          <img src={image} alt={name} className={classes.image} />
          {name}
        </div>
      </td>
      <td>{total}</td>
      <td>{condition}</td>
      <td>{price}</td>
      <DetailsButton />
    </tr>
  );
};

export default CollectionRow;
