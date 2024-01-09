import React, { useEffect } from "react";
import { setUserProfileThunkCreator, getStatusThunkCreator } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import ProfileInfo from "./profileInfo/ProfileInfo";
import Posts from "./posts/Posts";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const id = useSelector(state => state.authPage.id);
  const dispatch = useDispatch();

  let { userId } = useParams();
  if (!userId) {
    userId = id;
}

  useEffect(() => {
    dispatch(setUserProfileThunkCreator(userId));
    dispatch(getStatusThunkCreator(userId));
  }, [userId]);
  
  return (
    <main>
      <ProfileInfo />
      <Posts />
    </main>
  );
};

let ProfileWithRedirect = withAuthRedirect(Profile); // Это мой HOC, чтобы неавторизированного пользователя перебрасывало на стр логина.

export default ProfileWithRedirect;
