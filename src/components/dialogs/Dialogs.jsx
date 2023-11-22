import React from "react";
import classes from "./dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((el) => (
    <DialogItem key={el.id} name={el.name} id={el.id} avatar={el.avatar} />
  ));

  let messagesElements = props.messagesData.map((el) => (
    <MessageItem key={el.id} message={el.message} id={el.id} />
  ));

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
            onClick={() => {props.addMessage()}}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;
