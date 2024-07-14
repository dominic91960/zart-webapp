import { IoCaretForward } from "react-icons/io5";

import classes from "./DetailsButton.module.css";

const DetailsButton = () => {
  return (
    <button>
      <h4>
        See<span> details</span>
      </h4>
      <IoCaretForward size={15} className={classes.icon} />
    </button>
  );
};

export default DetailsButton;
