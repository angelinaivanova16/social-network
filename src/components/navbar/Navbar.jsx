import classes from './navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className={ classes.navigation }>
      <ul className={ classes.list }>
        <li className={ classes.item }><NavLink to='/profile' className={ ({ isActive }) => isActive ? classes.active : classes.link }>Profile</NavLink></li>
        <li className={ classes.item }><NavLink to='/dialogs' className={ ({ isActive }) => isActive ? classes.active : classes.link }>Messages</NavLink></li>
        <li className={ classes.item }><NavLink to='/news' className={ ({ isActive }) => isActive ? classes.active : classes.link }>News</NavLink></li>
        <li className={ classes.item }><NavLink to='/music' className={ ({ isActive }) => isActive ? classes.active : classes.link }>Music</NavLink></li>
        <li className={ classes.item }><NavLink to='/settings' className={ ({ isActive }) => isActive ? classes.active : classes.link }>Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;