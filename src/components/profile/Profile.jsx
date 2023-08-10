import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import classes from "./profile.module.css";

const Profile = (props) => {
  return (
    <main>
      <img className={classes.background} src="/images/beach.jpg" alt="beach" />
      <ProfileInfo />
      <Posts postsData={props.postsData} addPost={props.addPost} />
    </main>
  );
};

export default Profile;