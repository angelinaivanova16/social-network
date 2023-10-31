import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { useEffect } from "react";
import axios from "axios";
import { setAuthUserData } from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
  useEffect(() => {
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then((response) => {
          if(response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
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