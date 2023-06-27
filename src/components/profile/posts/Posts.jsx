import Post from './post/Post';
import classes from './posts.module.css'

const Posts = () => {

  let postsData = [
    {id: 1, message: 'Do not give up, the beginning is always the hardest.', likes: 20},
    {id: 2, message: 'It is my first post. Never stop dreaming.', likes: 30}
  ];

  return(
    <div>
      <form>
        <h2 className={ classes.title }>My posts</h2>
        <div className={ classes.postFormContent }>
          <input className={ classes.postFormNews } type='text' placeholder='your news...' />
          <button className={ classes.postFormBtn } type='submit'>Send</button>
        </div>
      </form>
      <Post postMessage={postsData[0].message} likesCount={postsData[0].likes} />
      <Post postMessage={postsData[1].message} likesCount={postsData[1].likes} />
    </div>
  )
}

export default Posts;