import Posts from './posts/Posts';
import classes from './profile.module.css'

const Profile = () => {
  return(
    <main className={ classes.content }>
      <img className={ classes.background } src='/images/beach.jpg' alt=''/>
      <div className={ classes.about }>
        <img className={ classes.ava } src='/images/cat.jpg' alt=''/>
        <div>
          <h1 className={ classes.title }>Angelina I.</h1>
          <p className={ classes.text }>Date of Birth: 16 september</p>
          <p className={ classes.text }>City: Petrozavodsk</p>
          <p className={ classes.text }>Education: KSPA`11</p>
          <p className={ classes.text }>Web Site: <a className={ classes.mySite } href="https://github.com/angelinaivanova16">https://github.com/angelinaivanova16</a></p>
        </div>
      </div>
      <Posts />
    </main>
  )
}

export default Profile;