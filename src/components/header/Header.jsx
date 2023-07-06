import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src="/images/logo.png" alt="logo" />
      <h1 className={classes.title}>#4Travelers</h1>
    </header>
  );
};

export default Header;
