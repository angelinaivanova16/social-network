import React from "react";
import Post from "./post/Post";
import classes from "./posts.module.css";

const Posts = (props) => {
  let postsElements = props.postsData.map((el) => (
    <Post key={el.id} ava={el.ava} postMessage={el.message} likesCount={el.likes} />
  ));

  let newPostElement = React.createRef();

  let OnAddPost = () => {
    // props.dispatch(addPostActionCreator());
    props.addPost();
  };

  let OnChangePost = () => {
    let text = newPostElement.current.value;
    // props.dispatch(updatePostTextActionCreator(text));
    props.updatePostText(text);
  };

  return (
    <div>
      <form>
        <h2 className={classes.title}>My posts</h2>
        <div className={classes.postFormContent}>
          <input
            className={classes.postFormNews}
            type="text"
            onChange={OnChangePost}
            placeholder="your news..."
            ref={newPostElement}
            value={props.newPostText}
          />
          <button
            className={classes.postFormBtn}
            type="button"
            onClick={OnAddPost}
          >
            Send
          </button>
        </div>
      </form>
      {postsElements}
    </div>
  );
};

export default Posts;
