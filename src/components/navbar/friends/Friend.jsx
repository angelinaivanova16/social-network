import classes from "./friend.module.css";

const Friend = ({avatar, name}) => {
  return (
    <div className={classes.card}>
      <img className={classes.ava} src={avatar} alt="ava" />
      <p  className={classes.name}>{name}</p>
    </div>
  );
};

export default Friend;
