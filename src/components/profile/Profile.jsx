import PostsContainer from "./posts/PostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <main>
      <ProfileInfo 
        profile={props.profile} 
        status={props.status} 
        updateStatusThunkCreator={props.updateStatusThunkCreator}
      />
      <PostsContainer
        store={props.store}
      />
    </main>
  );
};

export default Profile;
