import { NavLink } from "react-router-dom";
import classes from "./header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logoAndTitle}>
        <img className={classes.logo} src="/images/logo.png" alt="logo" />
        <h1 className={classes.title}>#4Travelers</h1>
      </div>
      <div className={classes.login}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
