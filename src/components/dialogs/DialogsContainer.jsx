// import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { compose } from "@reduxjs/toolkit";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(addMessageActionCreator(message));
    }
  };
};

export default compose (
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect // это наш HOC, чтобы не дублировать код.
) (Dialogs);
