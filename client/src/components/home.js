import {NavLink} from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <button><NavLink to='/SignUp'>Sign Up</NavLink></button>
      <button><NavLink to='/Login'>Login</NavLink></button>
    </div>
  )
}