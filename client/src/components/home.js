import {NavLink} from 'react-router-dom';
import heroImg from '../imgs/chartit-hero-img.png';
import heroImgNoBg from '../imgs/chartit-hero-img-nobg.png';

export const Home = (props) => {
  return (
    <main>
      <section id='hero'>
        <section id='hero-text'>
          <h1>Creating downloadable charts for individuals and businesses</h1>
          <p>
            Chartit makes it easy for businesses, schools and individuals, to visualize and present data 
            in clean cut, customizable charts.
          </p>
          <div className='flex buttonDiv'>
            <NavLink to='/SignUp'><button>Sign up</button></NavLink>
            <NavLink to='/SignUp'><button className='transparent-button'>Get Started</button></NavLink>
          </div>
        </section>

        <section id='hero-img'>
        {props.theme === 'light' ? 
        <img src={heroImg} alt='People sitting on a pie chart' /> :
        <img src={heroImgNoBg} alt='People sitting on a pie chart' />
        }
        </section>
      </section>
    </main>
  )
}