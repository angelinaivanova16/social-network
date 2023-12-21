import { usersAPI, followAPI } from "../api/api";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const CHANGE_PAGE = "users/CHANGE_PAGE";
const TOGGLE_PRELOADER = "users/TOGGLE_PRELOADER";
const TOGGLE_FOLLOWING_IN_PROGRESS = "users/TOGGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalItemsCount: action.totalItemsCount,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.selectedPage,
      };
    case TOGGLE_PRELOADER:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isLoading
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

//action-creators:
export let follow = (userId) => ({ type: FOLLOW, userId });
export let unFollow = (userId) => ({ type: UNFOLLOW, userId });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let setTotalUsersCount = (totalItemsCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalItemsCount,
});
export let changePage = (selectedPage) => ({ type: CHANGE_PAGE, selectedPage });
export let togglePreloader = (isFetching) => ({
  type: TOGGLE_PRELOADER,
  isFetching,
});
export let toggleFollowing = (isLoading, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isLoading,
  userId,
});

//thunk-creators-functions:
//(thunk-functions for requests from UI - BLL - DAL)
//(thunk-creators - родительская функция, которая вернет thunk-функцию, которая будет брать и запоминать
// данные у родительской функции, даже когда родит.функция будет уже выполнена - для создания замыкания)
export const getUsersThunkCreator =
  (currentPage, pageSize) => async (dispatch) => {
    dispatch(togglePreloader(true));
    let response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(togglePreloader(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
  };

export const unfollowUserThunkCreator = (userId) => async (dispatch) => {
  dispatch(toggleFollowing(true, userId));
  let response = await followAPI.unfollowUser(userId);
  if (response.data.resultCode === 0) {
    dispatch(unFollow(userId));
    dispatch(toggleFollowing(false, userId));
  }
};

export const followUserThunkCreator = (userId) => async (dispatch) => {
  dispatch(toggleFollowing(true, userId));
  let response = await followAPI.followUser(userId);
  if (response.data.resultCode === 0) {
    // подписка произошла, сервак подтвердил
    dispatch(follow(userId));
    dispatch(toggleFollowing(false, userId));
  }
};

export default usersReducer;
