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
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";

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
          <img src="/social-network/images/preloader.gif" alt="Loading..." />
        ) : null}
        <Users
          totalItemsCount={this.props.totalItemsCount}
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
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