import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { useEffect } from "react";
import { setAuthUserData } from "../../redux/auth-reducer";
import { authMeAPI } from "../../api/api";

const HeaderContainer = (props) => {
  useEffect(() => {
    authMeAPI.authMe().then((data) => {
          if(data.resultCode === 0) {
            let {id, email, login} = data.data;
            props.setAuthUserData(id, email, login);
          }
        });
});

  return <div>
    <Header isAuth={props.isAuth} login={props.login}/>
  </div>
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.authPage.isAuth,
    login: state.authPage.login
  };
};

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);