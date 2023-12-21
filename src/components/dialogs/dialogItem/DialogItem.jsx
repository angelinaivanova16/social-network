import classes from "./dialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({avatar, id, name}) => {
  return (
    <li className={classes.dialog}>
      <img className={classes.ava} src={avatar} alt="ava" />
      <NavLink
        to={"/dialogs/" + id}
        className={({ isActive }) => (isActive ? classes.active : classes.link)}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default DialogItem;