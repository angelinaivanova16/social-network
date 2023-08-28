import React from "react";
import classes from "./dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";
import { updateMessageTextActionCreator, addMessageActionCreator } from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} avatar={el.avatar} />
  ));

  let messagesElements = props.messagesData.map((el) => (
    <MessageItem message={el.message} id={el.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let changeMessage = () => {
    let textM = newMessageElement.current.value;
    props.dispatch(updateMessageTextActionCreator(textM));
  };
  

  return (
    <div className={classes.wrapper}>
      <ul>{dialogsElements}</ul>
      <div>
        {messagesElements}
        <form className={classes.newMessage}>
          <input
            className={classes.newMessageText}
            type="text"
            onChange={changeMessage}
            placeholder="your message..."
            ref={newMessageElement}
            value={props.newMessageText}
          />
          <button
            className={classes.messageBtn}
            type="button"
            onClick={addMessage}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;
