import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import {reducer as formReducer} from 'redux-form'
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  authPage: authReducer,
  form: formReducer,
})

const store = configureStore({
  reducer: reducers
});

window.store = store; 

export default store;