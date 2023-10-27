import "./reset.css";
import classes from "./App.module.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./components/profile/ProfilesContainer"
import DialogsContainer from "./components/dialogs/DialogsContainer";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import { Routes, Route } from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";

const App = (props) => {
  return (
    <div className={classes.App}>
      <Header />
      <Navbar friendsData={props.state.sideBar.friendsData} />
      <div className={classes.content}>
        <Routes>
          <Route
            path="/"
            element={
              <ProfileContainer
                store={props.store}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProfileContainer
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
        </Routes>
      </div>
    </div>
  );
};

export default App;
