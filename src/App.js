import "./reset.css";
import classes from "./App.module.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import { Routes, Route } from "react-router-dom";

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
              <Profile
                store={props.store}
                // postsData={props.state.profilePage.postsData}
                // newPostText={props.state.profilePage.newPostText}
                // dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                store={props.store}
                // postsData={props.state.profilePage.postsData}
                // newPostText={props.state.profilePage.newPostText}
                // dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <DialogsContainer
                store={props.store}
                // dialogsData={props.state.dialogsPage.dialogsData}
                // messagesData={props.state.dialogsPage.messagesData}
                // newMessageText={props.state.dialogsPage.newMessageText}
                // dispatch={props.dispatch}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
