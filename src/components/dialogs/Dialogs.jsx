import classes from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li className={classes.dialog}>
      <NavLink
        to={"/dialogs/" + props.url}
        className={({ isActive }) => (isActive ? classes.active : classes.link)}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

const MessageItem = (props) => {
  return <div className={classes.messageItem}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={classes.wrapper}>
      <ul>
        <DialogItem name="Sveta" url="1" />
        <DialogItem name="Kolya" url="2" />
        <DialogItem name="Victor" url="3" />
        <DialogItem name="Masha" url="4" />
        <DialogItem name="Sam" url="5" />
      </ul>
      <div>
        <MessageItem message="Hi" />
        <MessageItem message="I`m so happy for you!" />
        <MessageItem message="Today is gonna be a good day." />
      </div>
    </div>
  );
};

export default Dialogs;
