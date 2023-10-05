import React from "react";
import classes from "./dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} avatar={el.avatar} />
  ));

  let messagesElements = props.messagesData.map((el) => (
    <MessageItem message={el.message} id={el.id} />
  ));

  let OnAddMessage = () => {
    props.addMessage();
  };

  let OnChangeMessage = (event) => {
    let body = event.target.value;
    props.updateMessageText(body);
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
            onChange={OnChangeMessage}
            placeholder="your message..."
            // ref={newMessageElement}
            value={props.newMessageText}
          />
          <button
            className={classes.messageBtn}
            type="button"
            onClick={OnAddMessage}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;
