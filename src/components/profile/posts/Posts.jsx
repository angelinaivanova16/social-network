import React from "react";
import { reduxForm, Field } from "redux-form";
import Post from "./post/Post";
import classes from "./posts.module.css";
import { maxLengthCreator, requiredFields } from "../../../utils/validators";
import { Input } from "../../common/formsControls/FormsControls";

const maxLength100 = maxLengthCreator(100);

const Posts = (props) => {
  console.log("Renderrrrr");
  let postsElements = props.postsData.map((el) => (
    <Post key={el.id} ava={el.ava} postMessage={el.message} likesCount={el.likes} />
  ));

  const addPost = (values) => {
    props.addPost(values.post);
  }

  return (
    <div>
      <PostsReduxForm onSubmit={addPost} />
      {postsElements}
    </div>
  );
};

const PostsForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <h2 className={classes.title}>My posts</h2>
      <div className={classes.postFormContent}>
        <Field
          component={Input}
          name='post'
          validate={[requiredFields, maxLength100]}
          className={classes.postField}
          type="text"
          placeholder="your news..."
        />
        <button
          className={classes.postFormBtn}
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  )
}

const PostsReduxForm = reduxForm({
  form: 'posts'
}) (PostsForm)

export default Posts;
