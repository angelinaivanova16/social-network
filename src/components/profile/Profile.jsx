import PostsContainer from "./posts/PostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = ({profile, status, updateStatusThunkCreator, store}) => {

  return (
    <main>
      <ProfileInfo 
        profile={profile} 
        status={status} 
        updateStatusThunkCreator={updateStatusThunkCreator}
      />
      <PostsContainer
        store={store}
      />
    </main>
  );
};

export default Profile;
