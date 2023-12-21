import classes from "./messageItem.module.css";

const MessageItem = ({id, message}) => {
  return (
    <div
      className={(id % 2 === 0 ? classes.odd : classes.even)}
    >
      {message}
    </div>
  );
};

export default MessageItem;
