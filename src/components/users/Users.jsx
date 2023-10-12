import classes from "./users.module.css";

const Users = (props) => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.usersTitle}>Users</h1>
      <div className="users">
        <ul>
          {/* промапим каждого пользователя и создадим li на каждого */}
          {props.users.map((el) => (
            <li key={el.id} className={classes.user}>
              <div className={classes.userAvatar}>
                <img className={classes.ava} src={el.ava} alt="ava" />
                {el.followed ? (
                  <button
                    onClick={() => {
                      props.follow(el.id);
                    }}
                    className={classes.userBtn}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.unFollow(el.id);
                    }}
                    className={classes.userBtn}
                  >
                    Follow
                  </button>
                )}
              </div>
              <div className={classes.userInfo}>
                <div className={classes.userNameAndStatus}>
                  <p className={classes.userName}>{el.fullName}</p>
                  <p className={classes.userStatus}>{el.status}</p>
                </div>
                <div className={classes.userLocation}>
                  <p className={classes.city}>{el.location.city}</p>
                  <p className={classes.country}>{el.location.country}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
