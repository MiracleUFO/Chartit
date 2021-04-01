import {NavLink} from 'react-router-dom';
import icon from '../imgs/icon.png';
import switchOn from '../imgs/switchOn.png';
import switchOff from '../imgs/switchOff.png';

export const Header = (props) => {
let switchIcon = props.theme === 'light' ? switchOff : switchOn;
  return (
      <nav id='header'>
        <NavLink to='/' className='iconContainer'><img src={icon} alt='Chartit icon' className='icon' /></NavLink>
        <div className='flex buttonDiv'>
          <NavLink to='/SignUp'><button>Sign up</button></NavLink>
          <img src={switchIcon} alt='' onClick={props.themeToggler} className='switchIcon' />
        </div>
      </nav> 
  )
}