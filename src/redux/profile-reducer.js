import { profileAPI, statusAPI } from "../api/api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsData: [
    {
      id: 1,
      ava: "/social-network/images/svetaAva.jpg",
      message: "Do not give up, the beginning is always the hardest.",
      likes: 20,
    },
    {
      id: 2,
      ava: "/social-network/images/mashaAva.jpg",
      message: "Hi! Never stop dreaming.",
      likes: 30,
    },
  ],
  profile: null,
  status: "",
  newPostText: "",
};


export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost: (state, action) => {
      let newPost = {
        id: 5,
        ava: "/social-network/images/kolyaAva.jpg",
        message: action.payload,
        likes: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
    },
    setUserProfile: (state, action) => {
      state.profile = action.payload;
    },
    setUserStatus: (state, action) => {
      state.status = action.payload;
    }
  }
})

//thunk-creators-functions:
//(thunk-functions for requests from UI - BLL - DAL)
//(thunk-creators - родительская функция, которая вернет thunk-функцию, которая будет брать и запоминать
// данные у родительской функции, даже когда родит.функция будет уже выполнена - для создания замыкания)
export const setUserProfileThunkCreator = (userId) => async (dispatch) => {
  let response = await profileAPI.setUserProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatusThunkCreator = (userId) => async (dispatch) => {
  let response = await statusAPI.getStatus(userId);
  dispatch(setUserStatus(response.data));
};

export const updateStatusThunkCreator = (status) => async (dispatch) => {
  let response = await statusAPI.updateStatus(status); // в response будет сидеть результат, в котором зарезолвится promise
  if (response.data.resultCode === 0) {
    // для этой логики нужна переменная response
    dispatch(setUserStatus(status));
  }
};

export const { addPost, setUserProfile, setUserStatus } = profileSlice.actions;

export default profileSlice.reducer;




// Переделала на redux toolkit. А раньше делала так:
// const ADD_POST = "profile/ADD-POST";
// const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
// const SET_USER_STATUS = "profile/SET_USER_STATUS";
// const SET_USER_PHOTO = "SET_USER_PHOTO";

// const profileReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_POST:
//       let newPost = {
//         id: 5,
//         ava: "/social-network/images/kolyaAva.jpg",
//         message: action.post,
//         likes: 0,
//       };
//       return {
//         ...state,
//         postsData: [...state.postsData, newPost],
//         newPostText: "",
//       };
//     case SET_USER_PROFILE:
//       return {
//         ...state,
//         profile: action.userData,
//       };
//     case SET_USER_STATUS:
//       return {
//         ...state,
//         status: action.status,
//       };
//     default:
//       return state;
//   }
// };

//action-creators:
// export let addPostActionCreator = (post) => ({ type: ADD_POST, post });
// export let setUserProfile = (userData) => ({
//   type: SET_USER_PROFILE,
//   userData,
// });
// export let setUserStatus = (status) => ({ type: SET_USER_STATUS, status });


// Также исходный код с .then:
// export const updateStatusThunkCreator = (status) => {
//   return (dispatch) => {
//     statusAPI.updateStatus(status)
//     .then((response) => {
//       if (response.data.resultCode === 0) {
//         dispatch(setUserStatus(status));
//       }
//   });
//   }
// }
// Переделала на async await (см выше).