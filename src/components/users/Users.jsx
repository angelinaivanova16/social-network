import Paginator from "./Paginator";
import User from "./User";
import classes from "./users.module.css";

const Users = ({
  totalUsersCount,
  pageSize,
  changePage,
  currentPage,
  users,
  followingInProgress,
  unfollowUserThunkCreator,
  followUserThunkCreator,
}) => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.usersTitle}>Users</h1>
      <Paginator
        changePage={changePage}
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div className="users">
        <ul>
          {/* промапим каждого пользователя и создадим li на каждого */}
          {users.map((el) => (
            <User
              key={el.id}
              photos={el.photos}
              id={el.id}
              followed={el.followed}
              name={el.name}
              status={el.status}
              followingInProgress={followingInProgress}
              unfollowUserThunkCreator={unfollowUserThunkCreator}
              followUserThunkCreator={followUserThunkCreator}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

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
