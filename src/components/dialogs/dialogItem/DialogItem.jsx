import classes from "./dialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li className={classes.dialog}>
      <NavLink
        to={"/dialogs/" + props.id}
        className={({ isActive }) => (isActive ? classes.active : classes.link)}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogItem;