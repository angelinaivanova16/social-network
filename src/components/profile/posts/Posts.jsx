import Post from './post/Post';
import classes from './posts.module.css'

const Posts = () => {
  return(
    <div>
      <form>
        <h2 className={ classes.title }>My posts</h2>
        <div className={ classes.postFormContent }>
          <input className={ classes.postFormNews } type='text' placeholder='your news...' />
          <button className={ classes.postFormBtn } type='submit'>Send</button>
        </div>
      </form>
      <Post />
      <Post />
    </div>
  )
}

export default Posts;