import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.authPage.isAuth,
})

export const withAuthRedirect = (Component) => { // это HOC-функция, которая принимает целевой компонент (разный будет)
  class RedirectComponent extends React.Component { // создает однообразный контейнерный компонент с одинаковой логикой чтобы избавиться от дублирования кода
    render() {
      if (!this.props.isAuth) return <Navigate to={"/login"} /> // вот логика

      return <Component {...this.props} />
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent; //и возвращает этот контейнерный компонент
}