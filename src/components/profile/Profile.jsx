import PostsContainer from "./posts/PostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <main>
      <ProfileInfo profile={props.profile} />
      <PostsContainer
        store={props.store}
      />
    </main>
  );
};

export default Profile;
