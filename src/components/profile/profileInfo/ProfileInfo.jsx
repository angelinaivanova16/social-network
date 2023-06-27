import classes from "./profileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={classes.about}>
      <img className={classes.ava} src="/images/cat.jpg" alt="" />
      <div>
        <h1 className={classes.title}>Angelina I.</h1>
        <p className={classes.text}>Date of Birth: 16 september</p>
        <p className={classes.text}>City: Petrozavodsk</p>
        <p className={classes.text}>Education: KSPA`11</p>
        <p className={classes.text}>
          Web Site:{" "}
          <a
            className={classes.mySite}
            href="https://github.com/angelinaivanova16"
          >
            github
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
