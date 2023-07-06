import classes from "./messageItem.module.css";

const MessageItem = (props) => {
  return (
    <div
      className={(props.id % 2 === 0 ? classes.odd : classes.even)}
    >
      {props.message}
    </div>
  );
};

export default MessageItem;
