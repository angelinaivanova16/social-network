// import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { compose } from "@reduxjs/toolkit";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateMessageText: (body) => {
      dispatch(updateMessageTextActionCreator(body));
    },
  };
};

export default compose (
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect // это наш HOC, чтобы не дублировать код.
) (Dialogs);
