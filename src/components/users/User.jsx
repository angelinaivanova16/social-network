import classes from "./users.module.css";
import { NavLink } from "react-router-dom";

const User = ({
  // users,
  id,
  photos,
  followed,
  name,
  status,
  followingInProgress,
  unfollowUserThunkCreator,
  followUserThunkCreator,
}) => {
  return (
    
        <li key={id} className={classes.user}>
          <div className={classes.userAvatar}>
            {" "}
            <NavLink to={"/profile/" + id} className={classes.link}>
              <img
                className={classes.ava}
                src={
                  photos.small != null
                    ? photos.small
                    : "/social-network/images/userIcon.jpg"
                }
                alt="ava"
              />
            </NavLink>
            {followed ? (
              <button
                disabled={followingInProgress.some((id) => id === id)}
                onClick={() => {
                  unfollowUserThunkCreator(id);
                }}
                className={classes.userBtn}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === id)}
                onClick={() => {
                  followUserThunkCreator(id);
                }}
                className={classes.userBtn}
              >
                Follow
              </button>
            )}
          </div>
          <div className={classes.userInfo}>
            <div className={classes.userNameAndStatus}>
              <p className={classes.userName}>{name}</p>
              <p className={classes.userStatus}>{status}</p>
            </div>
            <div className={classes.userLocation}>
              <p className={classes.city}>{"el.location.city"}</p>
              <p className={classes.country}>{"el.location.country"}</p>
            </div>
          </div>
        </li>
     
  );
};

export default User;
