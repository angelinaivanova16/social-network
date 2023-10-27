import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import axios from "axios";
import {
  follow,
  unFollow,
  setUsers,
  setTotalUsersCount,
  changePage,
  togglePreloader,
} from "../../redux/users-reducer";
import { setUserProfile } from "../../redux/profile-reducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.togglePreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.togglePreloader(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  changePage = (pageNumber) => {
    this.props.changePage(pageNumber);
    this.props.togglePreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.togglePreloader(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  };

  goToProfile = (userId) => {
    this.props.setUserProfile(userId);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  };
  
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <img src="/images/preloader.gif" alt="Loading..." />
        ) : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          changePage={this.changePage}
          isFetching={this.props.isFetching}
          setUserProfile={this.props.setUserProfile}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unFollow: (userId) => {
//       dispatch(unFollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     changePage: (selectedPage) => {
//       dispatch(changePageAC(selectedPage));
//     },
//     togglePreloader: (isFetching) => {
//       dispatch(togglePreloaderAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {follow, unFollow, setUsers, setTotalUsersCount, changePage, togglePreloader, setUserProfile})(UsersContainer);
