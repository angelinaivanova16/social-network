import { profileAPI, statusAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
// const SET_USER_PHOTO = "SET_USER_PHOTO";

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
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        ava: "/images/kolyaAva.jpg",
        message: action.post,
        likes: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
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
export let addPostActionCreator = (post) => ({ type: ADD_POST, post });
export let setUserProfile = (userData) => ({ type: SET_USER_PROFILE, userData});
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status})
// export let setUserPhoto = (image) => ({type: SET_USER_PHOTO, image})

//thunk-creators-functions: 
//(thunk-functions for requests from UI - BLL - DAL)
//(thunk-creators - родительская функция, которая вернет thunk-функцию, которая будет брать и запоминать 
// данные у родительской функции, даже когда родит.функция будет уже выполнена - для создания замыкания)
export const setUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.setUserProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
  });
  }
}

export const getStatusThunkCreator = (userId) => {
  return (dispatch) => {
    statusAPI.getStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data));
  });
  }
}

export const updateStatusThunkCreator = (status) => {
  return (dispatch) => {
    statusAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
  });
  }
}

// export const updatePhotoThunkCreator = (image) => {
//   return (dispatch) => {
//     profileAPI.setUserImage(image).then((response) => {
//       if (response.data.resultCode === 0) {
//         dispatch(setUserPhoto(image));
//       }
//   });
//   }
// }

export default profileReducer;
