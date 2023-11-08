import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  unFollow,
  setUsers,
  setTotalUsersCount,
  changePage,
  togglePreloader,
  toggleFollowing,
} from "../../redux/users-reducer";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.togglePreloader(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        this.props.togglePreloader(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  changePage = (pageNumber) => {
    this.props.changePage(pageNumber);
    this.props.togglePreloader(true);
    usersAPI.changePageNumber(pageNumber, this.props.pageSize).then((data) => {
        this.props.togglePreloader(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
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
          followingInProgress={this.props.followingInProgress}
          toggleFollowing={this.props.toggleFollowing}
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

export default connect(mapStateToProps, {follow, unFollow, setUsers, setTotalUsersCount, changePage, togglePreloader, toggleFollowing})(UsersContainer);
