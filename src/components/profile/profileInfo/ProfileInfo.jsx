import { useSelector } from "react-redux";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import classes from "./profileInfo.module.css";

const ProfileInfo = () => {
  const profile = useSelector(state => state.profilePage.profile);
  const status = useSelector(state => state.profilePage.status);

  if(!profile) {
    return <img src="/social-network/images/preloader.gif" alt="Loading..." /> }

  return (
    <div className={classes.about}>
      <div className={classes.image}>
        <img className={classes.ava} src={profile.photos.small} alt="" />
      </div>
      <div>
        <h1 className={classes.title}>{profile.fullName}</h1>
        <ProfileStatusWithHooks status={status} />
        <p className={classes.text}>About Me: {profile.aboutMe}</p>
        <p className={classes.text}>Looking For A Job: {profile.lookingForAJobDescription}</p>
        <p className={classes.text}>
          Web Site:{" "}
          <a
            className={classes.mySite}
            href={profile.contacts.vk}
            target='_blank'
            rel="noopener noreferrer"
          >
            {profile.contacts.vk}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
