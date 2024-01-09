import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./posts.module.css";
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator, requiredFields } from "../../../utils/validators";
import { Input } from "../../common/formsControls/FormsControls";
import Post from "./post/Post";
import { addPost } from "../../../redux/profile-reducer";

const maxLength100 = maxLengthCreator(100);

const Posts = () => {
  const postsData = useSelector(state => state.profilePage.postsData);
  const dispatch = useDispatch();

  let postsElements = postsData.map((el) => (
    <Post key={el.id} ava={el.ava} postMessage={el.message} likesCount={el.likes} />
  ));

  const addMyPost = (values) => {
    dispatch(addPost(values.post))
  }

  return (
    <div>
      <PostsReduxForm onSubmit={addMyPost} />
      {postsElements}
    </div>
  );
};

const PostsForm = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
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
