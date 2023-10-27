import classes from "./profileInfo.module.css";

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <img src="/images/preloader.gif" alt="Loading..." /> }

  return (
    <div className={classes.about}>
        <img className={classes.ava} src={props.profile.photos.small} alt="" />
      <div>
        <h1 className={classes.title}>{props.profile.fullName}</h1>
        <p className={classes.text}>About Me: {props.profile.aboutMe}</p>
        <p className={classes.text}>Looking For A Job: {props.profile.lookingForAJobDescription}</p>
        <p className={classes.text}>
          Web Site:{" "}
          <a
            className={classes.mySite}
            href={props.profile.contacts.vk}
            target='_blank'
            rel="noopener noreferrer"
          >
            {props.profile.contacts.vk}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
