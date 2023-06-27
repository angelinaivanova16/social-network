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

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'I`m so happy for you!'},
    {id: 3, message: 'Today is gonna be a good day.'}
  ];

  return (
    <div className={classes.wrapper}>
      <ul>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </ul>
      <div>
        <MessageItem message={messagesData[0].message} />
        <MessageItem message={messagesData[1].message} />
        <MessageItem message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
