import { NavLink } from 'react-router-dom';
import heroImg from '../imgs/chartit-hero-img.png';
import heroImgNoBg from '../imgs/chartit-hero-img-nobg.png';

export const Hero = (props) => {
  return (
    <section>
      <section id='hero'>
        <section id='hero-text'>
          <h1><span>Creating</span> downloadable charts for individuals, schools, and businesses</h1>
          <p>
            Chartit makes it faster and easier for businesses, schools and individuals to visualize data 
            in clean, customizable, downloadable charts.
          </p>
          <div className='flex buttonDiv'>
            <NavLink to='/SignUp'><button>Sign up</button></NavLink>
            <a href='#charter-wrapper-wrapper'><button className='transparent-button'>Get Started</button></a>
          </div>
        </section>

        <section id='hero-img'>
          {window.innerWidth >= 800 ?
          props.theme === 'light' ? 
          <img src={heroImg} alt='People sitting on a pie chart' />  :
          <img src={heroImgNoBg} alt='People sitting on a pie chart' /> :
          <img src={heroImgNoBg} alt='People sitting on a pie chart' />
          }
        </section>
      </section>
    </section>
  )
}

