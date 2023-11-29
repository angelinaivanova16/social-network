import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredFields } from "../../utils/validators";
import { Input } from "../common/formsControls/FormsControls";
import classes from "./registration.module.css"
import { NavLink } from "react-router-dom";

const maxLength15 = maxLengthCreator(15);

const RegistrationPage = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <RegistrationReduxForm onSubmit={onSubmit} />
  )
}

const Registration = (props) => {
  return (
    <div className={classes.authorizationContainer}>
      <form onSubmit={props.handleSubmit} className={classes.formAuthorization} action="">
        <NavLink to={'/login'}>
          <p className={classes.formAuthorizationSubtitle}>sign in</p>
        </NavLink>
        <div className={classes.formAuthorizationWrapper}>
          <h1 className={classes.formAuthorizationTitle}>sign up</h1>
          <Field
            component={Input}
            name={'registrationLogin'}
            validate={[requiredFields, maxLength15]}
            className={classes.formAuthorizationItem}
            type="text"
            placeholder="login"
            id="login"
          />
          <Field
            component={Input}
            name={'registrationPassword'}
            validate={[requiredFields, maxLength15]}
            className={classes.formAuthorizationItem}
            type="password"
            placeholder="password"
            id="password"
          />

          <div className={classes.formAuthorizationAgreement}>
            <Field
              component="input"
              name={'registrationCheckbox'}
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

const RegistrationReduxForm = reduxForm({
  form: 'registration'
}) (Registration)

export default RegistrationPage;