import classes from './post.module.css'

const Post = () => {
  return(
    <div className={ classes.post }>
      <div className={ classes.ava }></div>
      <p>post1</p>
      <div className={ classes.like }></div>
    </div>
  )
}

export default Post;