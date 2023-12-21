import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logoutThunkCreator } from "../../redux/auth-reducer";

const HeaderContainer = ({isAuth, login, logoutThunkCreator}) => {
  return <div>
    <Header isAuth={isAuth} login={login} logout={logoutThunkCreator}/>
  </div>
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.authPage.isAuth,
    login: state.authPage.login
  };
};

export default connect(mapStateToProps, {logoutThunkCreator})(HeaderContainer);