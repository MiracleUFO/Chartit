import {NavLink} from 'react-router-dom';

export const Header = (props) => {
  //let classes = document.URL.includes('SignUp') ||  document.URL.includes('Login') ? 'none' : '';

  return (
    <header /*className={classes}*/ id='header'>
      <NavLink to='/'><h1 id='logo'>ChartIt</h1></NavLink>
      <svg alt='Click to toggle mode'onClick={props.themeToggler} >
        <circle cx="100" cy="50" r="1em" strokeWidth="2"  id='crescent'/>
        <circle cx="120" cy="50" r="0.95em" strokeWidth="2"  id='circle'/>
      </svg>
    </header>
  )
}