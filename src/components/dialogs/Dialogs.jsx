import classes from "./dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id} />)

  let messagesElements = props.messagesData.map(el => <MessageItem message={el.message} />)

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
