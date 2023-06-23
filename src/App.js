import './reset.css'
import classes from './App.module.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';

const App = () => {
  return (
    <div className={ classes.App }>
      <Header />
      <Navbar />
      <div className={ classes.content }>
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;