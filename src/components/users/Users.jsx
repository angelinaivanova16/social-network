import React from "react";
import classes from "./users.module.css";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      this.props.setUsers(response.data.items)
      })
  }
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.usersTitle}>Users</h1>
        <div className="users">
          <ul>
            {/* промапим каждого пользователя и создадим li на каждого */}
            {this.props.users.map((el) => (
              <li key={el.id} className={classes.user}>
                <div className={classes.userAvatar}>                <img className={classes.ava} src={el.photos.small != null ? el.photos.small : "/images/userIcon.jpg"} alt="ava" />
                  {el.followed ? (
                    <button
                      onClick={() => {
                        this.props.follow(el.id);
                      }}
                      className={classes.userBtn}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.unFollow(el.id);
                      }}
                      className={classes.userBtn}
                    >
                      Follow
                    </button>
                  )}
                </div>
                <div className={classes.userInfo}>
                  <div className={classes.userNameAndStatus}>
                    <p className={classes.userName}>{el.name}</p>
                    <p className={classes.userStatus}>{el.status}</p>
                  </div>
                  <div className={classes.userLocation}>
                    <p className={classes.city}>{'el.location.city'}</p>
                    <p className={classes.country}>{'el.location.country'}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

  // if(props.users.length === 0) {
  //   props.setUsers([
  //       {
  //         id: 1,
  //         followed: true,
  //         fullName: "Maria",
  //         ava: "/images/mashaAva.jpg",
  //         status: "Travel is good for the soul",
  //         location: { city: "Minsk", country: "Belarus" },
  //       },
  //       {
  //         id: 2,
  //         followed: false,
  //         fullName: "Dmitry",
  //         ava: "/images/dimaAva.jpg",
  //         status: "I`m a boss",
  //         location: { city: "Minsk", country: "Belarus" },
  //       },
  //       {
  //         id: 3,
  //         followed: false,
  //         fullName: "Roman",
  //         ava: "/images/romaAva.jpg",
  //         status: "Collect Moments, Not Things",
  //         location: { city: "Moscow", country: "Russia" },
  //       },
  //       {
  //         id: 4,
  //         followed: true,
  //         fullName: "Svetlana",
  //         ava: "/images/svetaAva.jpg",
  //         status: "Travel. Your money will return. Your time won’t.",
  //         location: { city: "Nice", country: "France" },
  //       },
  //     ])
  // }

export default Users;
