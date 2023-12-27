import { NavLink } from "react-router-dom";
import classes from "./header.module.css";

const Header = ({isAuth, login, logout}) => {
  return (
    <header className={classes.header}>
      <div className={classes.logoAndTitle}>
        <img className={classes.logo} src='/social-network/images/logo.png' alt="logo" />
        <h1 className={classes.title}>#4Travelers</h1>
      </div>
      <div className={classes.login}>
        {isAuth 
        ? <div>{login} - <button className={classes.btn} onClick={logout}>Log out</button></div>
        : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
