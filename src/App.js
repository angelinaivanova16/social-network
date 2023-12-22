import "./reset.css";
import classes from "./App.module.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { initializeAppThunkCreator } from "./redux/app-reducer";
import HeaderContainer from "./components/header/HeaderContainer";
import Navbar from "./components/navbar/Navbar";
import ProfilesContainer from "./components/profile/ProfilesContainer"
// import DialogsContainer from "./components/dialogs/DialogsContainer";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import LoginPage from "./components/login/Login";
import Registration from "./components/registration/Registrationn";
import UsersContainer from "./components/users/UsersContainer";

import { lazy, Suspense } from "react";
const DialogsContainer = lazy(() => import('./components/dialogs/DialogsContainer'));

const App = ({initializeAppThunkCreator, initialized, store, state}) => {
  useEffect(() => {
    initializeAppThunkCreator()
  });

  if(!initialized) {
    return <img src="/images/preloader.gif" alt="Loading..." />
  }

  return (
    <div className={classes.App}>
      <div className={classes.header}>
        <HeaderContainer store={store}/>
      </div>
      <Navbar friendsData={state.sideBar.friendsData}/>
      <div className={classes.content}>
        <Routes>
        <Route
            path="/"
            element={
              <ProfilesContainer
                store={store}
              />
            }
          />
          <Route
            path="/profile/*"
            element={
              <ProfilesContainer
                store={store}
              />
            }
          />
          <Route
            path="/profile/:userId?"
            element={
              <ProfilesContainer
                store={store}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <DialogsContainer
                  store={store}
                />
              </Suspense>
            }
          />
          <Route path="/news" element={<News />} />
          <Route
            path="/users"
            element={<UsersContainer store={store} />}
          />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/login"
            element={<LoginPage store={store} />}
          />
          <Route
            path="/registration"
            element={<Registration store={store} />}
          />
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.appPage.initialized
})

export default connect(mapStateToProps, {initializeAppThunkCreator})(App);