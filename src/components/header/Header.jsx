import classes from './header.module.css'

const Header = () => {
  return(
    <header className={ classes.header }>
      <img className={ classes.logo } src='/images/logo.png' alt='logo'/>
    </header>
  )
}

export default Header;