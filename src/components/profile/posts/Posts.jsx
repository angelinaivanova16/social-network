import React from 'react';
import Post from './post/Post';
import classes from './posts.module.css'

const Posts = (props) => {

  let postsElements = props.postsData.map(el => <Post ava={el.ava} postMessage={el.message} likesCount={el.likes} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch( {type: 'ADD-POST'} );
  }

  let changePost = () => {
    let text = newPostElement.current.value;
    props.dispatch( {type: 'UPDATE-POST-TEXT', newText: text } );
  }

  return(
    <div>
      <form>
        <h2 className={ classes.title }>My posts</h2>
        <div className={ classes.postFormContent }>
          <input className={ classes.postFormNews } type='text' onChange={changePost} placeholder='your news...' ref={newPostElement} value={props.newPostText}/>
          <button className={ classes.postFormBtn } type='button' onClick={addPost} >Send</button>
        </div>
      </form>
      {postsElements}
    </div>
  )
}

export default Posts;