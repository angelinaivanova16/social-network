import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unFollowAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId))
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;