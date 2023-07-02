import classes from "./dialogs.module.css";
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

const MessageItem = (props) => {
  return <div className={classes.messageItem}>{props.message}</div>;
};


const Dialogs = () => {

  let dialogsData = [
    {id: 1, name: 'Sveta'},
    {id: 2, name: 'Kolya'},
    {id: 3, name: 'Victor'},
    {id: 4, name: 'Masha'},
    {id: 5, name: 'Sam'}
  ];

  let dialogsElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id} />)

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'I`m so happy for you!'},
    {id: 3, message: 'Today is gonna be a good day.'}
  ];

  let messagesElements = messagesData.map(el => <MessageItem message={el.message} />)

  return (
    <div className={classes.wrapper}>
      <ul>
        {dialogsElements}
      </ul>
      <div>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
