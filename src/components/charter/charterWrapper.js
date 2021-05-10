import { CharterPicker } from './charterPicker';
import { CharterInputs } from './charterInputs';
import { CharterFinal } from './charterFinal';

export const CharterWrapper = () => {
    return (
        <section id='charter-wrapper-wrapper'>
            <h2>Let's Chartit...</h2>
            <section id='charter-wrapper'>
                <CharterPicker />
                <CharterInputs />
                <CharterFinal />
            </section>
        </section>
        
    )
  }