import { NavLink } from 'react-router-dom';
import heroImg from '../imgs/chartit-hero-img.png';
import heroImgNoBg from '../imgs/chartit-hero-img-nobg.png';

export const Hero = (props) => {

  let handleScroll = (e) => {
    var top = document.getElementById('charter-wrapper-wrapper').getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: top,
      left: 100,
      behavior: 'smooth'
    });
  }

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
            <button id='transparent-button' onClick={handleScroll}>Get Started</button>
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

