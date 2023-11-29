import ProfileStatus from "./ProfileStatus";
import classes from "./profileInfo.module.css";

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <img src="/images/preloader.gif" alt="Loading..." /> }

  return (
    <div className={classes.about}>
      <div className={classes.image}>
        <img className={classes.ava} src={props.profile.photos.small} alt="" />
        {/* <input type="file" name="AddImage" id="AddImage" accept="image/*" />
        <button onClick={() => {props.updatePhotoThunkCreator()}}>Save</button> */}
      </div>
      <div>
        <h1 className={classes.title}>{props.profile.fullName}</h1>
        <ProfileStatus status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator}/>
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
