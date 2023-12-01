import { authMeThunkCreator } from "./auth-reducer";

const INITIALIZED = "INITIALIZED";

let initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
      case INITIALIZED:
        return {
          ...state,
          initialized: true,
        }
    default:
      return state;
  }
};

export let initializedSuccess = () => ({ type: INITIALIZED });

export const initializeAppThunkCreator = () => {
  return (dispatch) => {
    let promise = dispatch(authMeThunkCreator());
    promise.then(() => {
      dispatch(initializedSuccess())
    })
  }
}

export default appReducer;
