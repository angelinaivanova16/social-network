import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { useEffect } from "react";
import { authMeThunkCreator, logoutThunkCreator } from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
  useEffect(() => {
    props.authMeThunkCreator()
  });

  return <div>
    <Header isAuth={props.isAuth} login={props.login} logout={props.logoutThunkCreator}/>
  </div>
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.authPage.isAuth,
    login: state.authPage.login
  };
};

export default connect(mapStateToProps, {authMeThunkCreator, logoutThunkCreator})(HeaderContainer);