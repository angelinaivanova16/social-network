import PostsContainer from "./posts/PostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";
import classes from "./profile.module.css";

const Profile = (props) => {
  return (
    <main>
      <img className={classes.background} src="/images/beach.jpg" alt="beach" />
      <ProfileInfo profile={props.profile} />
      <PostsContainer
        store={props.store}
      />
    </main>
  );
};

export default Profile;
