// import React from "react";
import Posts from "./Posts";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPostActionCreator(post));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts);

export default PostsContainer;
