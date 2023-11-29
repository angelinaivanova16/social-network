import { reduxForm, Field } from "redux-form";
import classes from "./login.module.css"
import { NavLink } from "react-router-dom";

const LoginPage = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <LoginReduxForm onSubmit={onSubmit} />
  )
}

const Login = (props) => {
  return (
    <div className={classes.authorizationContainer}>
      <form onSubmit={props.handleSubmit} className={classes.formAuthorization} action="">
        <NavLink to={'/registration'}>
          <p className={classes.formAuthorizationSubtitle}>sign up</p>
        </NavLink>
        <div className={classes.formAuthorizationWrapper}>
          <h1 className={classes.formAuthorizationTitle}>sign in</h1>
          <Field
            component={'input'}
            name={'login'}
            className={classes.formAuthorizationItem}
            type="text"
            placeholder="login"
            id="login"
            />
          <p className={classes.formAuthorizationNotification} id="notification1"></p>
          <Field
            component={'input'}
            name={'password'}
            className={classes.formAuthorizationItem}
            type="password"
            placeholder="password"
            id="password"
          />
          <p className={classes.formAuthorizationNotification} id="notification2"></p>

          <div className={classes.formAuthorizationAgreement}>
            <Field
              component={'input'}
              name={'checkbox'}
              className={classes.formAuthorizationItemCheckbox}
              type="checkbox"
              id="agree"
            />
            <label htmlFor="agree">
              <div className={classes.formAuthorizationAgree}>
              Keep me signed in
              </div>
            </label>
          </div>
          <p className={classes.formAuthorizationNotification} id="notification3"></p>

          <button className={classes.formAuthorizationBtn} type="submit" id="b">
          Sign in
          </button>
        </div>
      </form>
    </div>
  );
};


const LoginReduxForm = reduxForm({
  form: 'login'
}) (Login)


export default LoginPage;
