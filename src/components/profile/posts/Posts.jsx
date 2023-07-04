import Post from './post/Post';
import classes from './posts.module.css'

const Posts = (props) => {

  let postsElements = props.postsData.map(el => <Post postMessage={el.message} likesCount={el.likes} />)

  return(
    <div>
      <form>
        <h2 className={ classes.title }>My posts</h2>
        <div className={ classes.postFormContent }>
          <input className={ classes.postFormNews } type='text' placeholder='your news...' />
          <button className={ classes.postFormBtn } type='submit'>Send</button>
        </div>
      </form>
      {postsElements}
    </div>
  )
}

export default Posts;