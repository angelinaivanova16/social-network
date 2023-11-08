const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const CHANGE_PAGE = "CHANGE_PAGE";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
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
        totalUsersCount: action.totalUsersCount,
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
      // debugger
      return {
        ...state,
        followingInProgress: action.isLoading
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      }
    default:
      return state;
  }
};

export let follow = (userId) => ({ type: FOLLOW, userId });
export let unFollow = (userId) => ({ type: UNFOLLOW, userId });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export let changePage = (selectedPage) => ({ type: CHANGE_PAGE, selectedPage });
export let togglePreloader = (isFetching) => ({type: TOGGLE_PRELOADER, isFetching});
export let toggleFollowing = (isLoading, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isLoading, userId});

export default usersReducer;
