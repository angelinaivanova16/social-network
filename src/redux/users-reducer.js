const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const CHANGE_PAGE = "CHANGE_PAGE";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
      case SET_USERS:
        return {
          ...state,
          users: action.users
        }
      case SET_TOTAL_USERS_COUNT:
        return {
          ...state,
          totalUsersCount: action.totalUsersCount
        }
        case CHANGE_PAGE:
          return {
            ...state,
            currentPage: action.selectedPage
          }
        case TOGGLE_PRELOADER:
          return {
            ...state,
            isFetching: action.isFetching
          }
    default:
      return state;
  }
};

export let followAC = (userId) => ({ type: FOLLOW, userId });
export let unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export let setUsersAC = (users) => ({type: SET_USERS, users});
export let setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export let changePageAC = (selectedPage) => ({type: CHANGE_PAGE, selectedPage});
export let togglePreloaderAC = (isFetching) => ({type: TOGGLE_PRELOADER, isFetching})

export default usersReducer;