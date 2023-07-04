import classes from "./messageItem.module.css";

const MessageItem = (props) => {
  return <div className={classes.messageItem}>{props.message}</div>;
};

export default MessageItem;