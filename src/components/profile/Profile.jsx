import PostsContainer from "./posts/PostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";
import { Navigate } from "react-router-dom";

const Profile = (props) => {
  if (props.isAuth === false) return <Navigate to={"/login"} />

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
