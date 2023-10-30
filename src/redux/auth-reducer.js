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
          ...action.data,
          isAuth: true
        }
    default:
      return state;
  }
};

export let setAuthUserData = (id, email, login) => ({ type: SET_AUTH_USER_DATA, data: {id, email, login}});

export default authReducer;
