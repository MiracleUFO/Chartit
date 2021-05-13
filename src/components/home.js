import { Hero } from './hero';
import { CharterWrapper } from './charter/charterWrapper';

export const Home = (props) => {
  return (
    <main id='home'>
      <Hero theme={props.theme} />
      <CharterWrapper />
    </main>
  )
}