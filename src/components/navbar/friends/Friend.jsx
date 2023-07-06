import classes from "./friend.module.css";

const Friend = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes.ava} src={props.avatar} alt="ava" />
      <p  className={classes.name}>{props.name}</p>
    </div>
  );
};

export default Friend;
