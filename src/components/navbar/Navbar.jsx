import classes from './navbar.module.css'

const Navbar = () => {
  return(
    <nav className={ classes.navigation }>
      <ul className={ classes.list }>
        <li className={ classes.item }><a className={ classes.link } href='#d'>Profile</a></li>
        <li className={ classes.item }><a className={ classes.link } href='#d'>Messages</a></li>
        <li className={ classes.item }><a className={ classes.link } href='#d'>News</a></li>
        <li className={ classes.item }><a className={ classes.link } href='#d'>Music</a></li>
        <li className={ classes.item }><a className={ classes.link } href='#d'>Settings</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;