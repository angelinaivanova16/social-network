import React from 'react';
import Post from './post/Post';
import classes from './posts.module.css'

const Posts = (props) => {

  let postsElements = props.postsData.map(el => <Post ava={el.ava} postMessage={el.message} likesCount={el.likes} />)

  let newPostElement = React.createRef();
  let addPost = (e) => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value ="";
    e.preventDefault();
  }

  return(
    <div>
      <form>
        <h2 className={ classes.title }>My posts</h2>
        <div className={ classes.postFormContent }>
          <input className={ classes.postFormNews } type='text' placeholder='your news...' ref={newPostElement} />
          <button className={ classes.postFormBtn } type='submit' onClick={addPost} >Send</button>
        </div>
      </form>
      {postsElements}
    </div>
  )
}

export default Posts;