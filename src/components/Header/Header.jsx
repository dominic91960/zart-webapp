import { IoNotificationsOutline } from "react-icons/io5";

import Logo from "../../assets/images/logo.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={Logo} className={classes.logo} />

      <button className={classes.button}>
        <IoNotificationsOutline size={21} className={classes.stroke} />3
      </button>
    </header>
  );
};

export default Header;
