import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import classes from "./profile.module.css";

const Profile = () => {
  return (
    <main>
      <img className={classes.background} src="/images/beach.jpg" alt="" />
      <ProfileInfo />
      <Posts />
    </main>
  );
};

export default Profile;