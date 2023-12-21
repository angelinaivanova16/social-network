import classes from './post.module.css'

const Post = ({ava, postMessage, likesCount}) => {
  return(
    <div className={ classes.post }>
      <img className={classes.ava} src={ava} alt="ava" />
      <p>{postMessage}</p>
      <div className={ classes.like }></div>
      <span className={ classes.likes }>{likesCount}</span>
    </div>
  )
}

export default Post;