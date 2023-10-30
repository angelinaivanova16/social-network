import "./reset.css";
import classes from "./App.module.css";
import HeaderContainer from "./components/header/HeaderContainer";
import Navbar from "./components/navbar/Navbar";
import ProfilesContainer from "./components/profile/ProfilesContainer"
import DialogsContainer from "./components/dialogs/DialogsContainer";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import { Routes, Route } from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";

const App = (props) => {
  return (
    <div className={classes.App}>
      <div className={classes.header}><HeaderContainer store={props.store}/></div>
      <Navbar friendsData={props.state.sideBar.friendsData} />
      <div className={classes.content}>
        <Routes>
        <Route
            path="/"
            element={
              <ProfilesContainer
                store={props.store}
              />
            }
          />
          <Route
            path="/profile/*"
            element={
              <ProfilesContainer
                store={props.store}
              />
            }
          />
          <Route
            path="/profile/:userId?"
            element={
              <ProfilesContainer
                store={props.store}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <DialogsContainer
                store={props.store}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route
            path="/users"
            element={<UsersContainer store={props.store} />}
          />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/login"
            element={<UsersContainer store={props.store} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
