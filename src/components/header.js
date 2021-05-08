import {NavLink} from 'react-router-dom';
import icon from '../imgs/icon.png';
import iconalt from '../imgs/icon alt.png';
import switchOn from '../imgs/switchDarkOn.png';
import switchOff from '../imgs/switchOff.png';

export const Header = (props) => {
let switchIcon = props.theme === 'light' ? switchOff : switchOn;
  return (
      <nav id='header'>
        {window.innerWidth >= 800 ?
        props.theme === 'dark' ? 
        <NavLink to='/' className='icon-container'><img src={iconalt} alt='Chartit icon' className='icon' /></NavLink> :
        <NavLink to='/' className='icon-container-mobile'><img src={icon} alt='Chartit icon' className='icon-mobile' /></NavLink> :
        <NavLink to='/' className='icon-container-mobile'><img src={icon} alt='Chartit icon' className='icon-mobile' /></NavLink>
        }
        
        <section>
          <div className='flex buttonDiv'>
            <NavLink to='/SignUp'><button>Sign up</button></NavLink>
            <img src={switchIcon} alt='' onClick={props.themeToggler} className='switchIcon' />
          </div>
        </section>
      </nav> 
  )
}