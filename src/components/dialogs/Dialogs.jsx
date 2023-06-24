import classes from './dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
  return (
    <div className={ classes.wrapper }>
      <ul className={ classes.dialogitems }>
        <li className={ classes.dialog }><NavLink to='/sveta' className={ ({ isActive }) => isActive ? classes.active : classes.link }>Sveta</NavLink></li>
        <li className={ classes.dialog }><NavLink to='/kolya' className={ ({ isActive }) => isActive ? classes.active : classes.link }>Kolya</NavLink></li>
        <li className={ classes.dialog }><NavLink to='/victor' className={ ({ isActive }) => isActive ? classes.active : classes.link }>Victor</NavLink></li>
        <li className={ classes.dialog }><NavLink to='/masha' className={ ({ isActive }) => isActive ? classes.active : classes.link }>Masha</NavLink></li>
        <li className={ classes.dialog }><NavLink to='/sam' className={ ({ isActive }) => isActive ? classes.active : classes.link }>Sam</NavLink></li>
      </ul>
      <div className='{ classes.message-items }'>
        <div>Hi</div>
        <div>I`m so happy for you!</div>
        <div>Today is gonna be a good day.</div>
      </div>
    </div>
  )
}

export default Dialogs;