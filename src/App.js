import "./reset.css";
import classes from "./App.module.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
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
            <Route path="/" element={<Profile postsData={props.state.profilePage.postsData} addPost={props.addPost} />} />
            <Route path="/profile" element={<Profile postsData={props.state.profilePage.postsData} addPost={props.addPost} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;