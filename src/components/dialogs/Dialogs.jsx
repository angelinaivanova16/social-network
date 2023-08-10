import React from "react";
import classes from "./dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id} avatar={el.avatar} />)

  let messagesElements = props.messagesData.map(el => <MessageItem message={el.message} id={el.id} />)

  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
    <div className={classes.wrapper}>
      <ul>
        {dialogsElements}
      </ul>
      <div>
        {messagesElements}
        <form className={classes.newMessage}>
          <input className={ classes.newMessageText } type='text' placeholder='your message...' ref={newMessageElement} />
          <button className={ classes.messageBtn } type='submit' onClick={addMessage} >Send</button>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;