import classes from './post.module.css'

const Post = (props) => {
  return(
    <div className={ classes.post }>
      <div className={ classes.ava }></div>
      <p>{props.postMessage}</p>
      <div className={ classes.like }></div>
      <span className={ classes.likes }>{props.likesCount}</span>
    </div>
  )
}

export default Post;