import { stopSubmit } from "redux-form";
import { authMeAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
  isAuth: false,
  id: null,
  login: null,
  email: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_AUTH_USER_DATA:
        return {
          ...state,
          ...action.payload,
        }
    default:
      return state;
  }
};

export let setAuthUserData = (id, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: {id, email, login, isAuth}});

export const authMeThunkCreator = () => {
  return (dispatch) => {
    authMeAPI.authMe().then((response) => {
      if(response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  }
}

export const loginThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {
    authMeAPI.login(email, password, rememberMe).then((response) => {
      if(response.data.resultCode === 0) {
        dispatch(authMeThunkCreator())
      }
      else {
        let action = stopSubmit('login', {password: response.data.messages[0]});
        dispatch(action)
      }
    });
  }
}

export const logoutThunkCreator = () => {
  return (dispatch) => {
    authMeAPI.logout().then((response) => {
      if(response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  }
}

export default authReducer;
