import { profileAPI, statusAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
  postsData: [
    {
      id: 1,
      ava: "/images/svetaAva.jpg",
      message: "Do not give up, the beginning is always the hardest.",
      likes: 20,
    },
    {
      id: 2,
      ava: "/images/mashaAva.jpg",
      message: "Hi! Never stop dreaming.",
      likes: 30,
    },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        ava: "/images/kolyaAva.jpg",
        message: state.newPostText,
        likes: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
      case SET_USER_PROFILE:
        return {
          ...state,
          profile: action.userData
        };
      case SET_USER_STATUS:
        return {
          ...state,
          status: action.status
        };
    default:
      return state;
  }
};

//action-creators:
export let addPostActionCreator = () => ({ type: ADD_POST });
export let updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  newText: text,
});
export let setUserProfile = (userData) => ({ type: SET_USER_PROFILE, userData});
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status})

//thunk-creators-functions: 
//(thunk-functions for requests from UI - BLL - DAL)
//(thunk-creators - родительская функция, которая вернет thunk-функцию, которая будет брать и запоминать 
// данные у родительской функции, даже когда родит.функция будет уже выполнена - для создания замыкания)
export let setUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.setUserProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
  });
  }
}

export let getStatusThunkCreator = (userId) => {
  return (dispatch) => {
    statusAPI.getStatus(userId).then((data) => {
      dispatch(setUserStatus(data));
  });
  }
}

export let updateStatusThunkCreator = (status) => {
  return (dispatch) => {
    statusAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
  });
  }
}

export default profileReducer;
