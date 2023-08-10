import classes from './post.module.css'

const Post = (props) => {
  return(
    <div className={ classes.post }>
      <img className={classes.ava} src={props.ava} alt="ava" />
      <p>{props.postMessage}</p>
      <div className={ classes.like }></div>
      <span className={ classes.likes }>{props.likesCount}</span>
    </div>
  )
}

export default Post;