import PostsContainer from "./posts/PostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";
import classes from "./profile.module.css";

const Profile = (props) => {
  return (
    <main>
      <img className={classes.background} src="/images/beach.jpg" alt="beach" />
      <ProfileInfo />
      <PostsContainer
        store={props.store}
        // postsData={props.postsData}
        // newPostText={props.newPostText}
        // dispatch={props.dispatch}
      />
    </main>
  );
};

export default Profile;
