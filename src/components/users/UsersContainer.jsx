import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  changePage,
  getUsersThunkCreator,
  unfollowUserThunkCreator,
  followUserThunkCreator,
} from "../../redux/users-reducer";
import { compose } from "@reduxjs/toolkit";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }

  changePage = (pageNumber) => {
    this.props.changePage(pageNumber);
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
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
          changePage={this.changePage}
          followingInProgress={this.props.followingInProgress}
          unfollowUserThunkCreator={this.props.unfollowUserThunkCreator}
          followUserThunkCreator={this.props.followUserThunkCreator}
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
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {changePage, getUsersThunkCreator, unfollowUserThunkCreator, followUserThunkCreator})
) (UsersContainer);



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