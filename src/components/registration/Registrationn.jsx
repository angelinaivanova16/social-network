import classes from "./registration.module.css"
import { NavLink } from "react-router-dom";

const Registration = (props) => {
  return (
    <div className={classes.authorizationContainer}>
      <form className={classes.formAuthorization} action="">
        <NavLink to={'/login'}>
          <p className={classes.formAuthorizationSubtitle}>sign in</p>
        </NavLink>
        <div className={classes.formAuthorizationWrapper}>
          <h1 className={classes.formAuthorizationTitle}>sign up</h1>
          <input
              className={classes.formAuthorizationItem}
              type="text"
              placeholder="login"
              id="login"
            />
          <p className={classes.formAuthorizationNotification} id="notification1"></p>
          <input
              className={classes.formAuthorizationItem}
              type="password"
              placeholder="password"
              id="password"
            />
          <p className={classes.formAuthorizationNotification} id="notification2"></p>

          <div className={classes.formAuthorizationAgreement}>
            <input
              className={classes.formAuthorizationItemCheckbox}
              type="checkbox"
              id="agree"
            />
            <label htmlFor="agree">
              <div className={classes.formAuthorizationAgree}>
              I agree to receive emails
              </div>
            </label>
          </div>
          <p className={classes.formAuthorizationNotification} id="notification3"></p>

          <button className={classes.formAuthorizationBtn} type="submit" id="b">
          Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;