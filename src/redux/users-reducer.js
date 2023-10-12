const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: "Maria",
      ava: "/images/mashaAva.jpg",
      status: "Travel is good for the soul",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      followed: false,
      fullName: "Dmitry",
      ava: "/images/dimaAva.jpg",
      status: "I`m a boss",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 3,
      followed: false,
      fullName: "Roman",
      ava: "/images/romaAva.jpg",
      status: "Collect Moments, Not Things",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 4,
      followed: true,
      fullName: "Svetlana",
      ava: "/images/svetaAva.jpg",
      status: "Travel. Your money will return. Your time won’t.",
      location: { city: "Nice", country: "France" },
    },
  ],
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
    default:
      return state;
  }
};

export let followAC = (userId) => ({ type: FOLLOW, userId });
export let unFollowAC = (userId) => ({ type: UNFOLLOW, userId });

export default usersReducer;