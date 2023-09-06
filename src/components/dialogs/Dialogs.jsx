import React from "react";
import classes from "./dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} avatar={el.avatar} />
  ));

  let messagesElements = props.messagesData.map((el) => (
    <MessageItem message={el.message} id={el.id} />
  ));

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  // let newMessageElement = React.createRef();

  // let changeMessage = () => {
  //   let textM = newMessageElement.current.value;
  //   props.dispatch(updateMessageTextActionCreator(textM));
  // };
  // Закоментировала рабочий вариант с рефами. Через реф я обращалась к значению инпута.
  //  Но рефы лучше не использовать. Поэтому ниже переделала тот же функионал с событием (event).
  let changeMessage = (event) => {
    let body = event.target.value;
    props.dispatch(updateMessageTextActionCreator(body));
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
            // ref={newMessageElement}
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
