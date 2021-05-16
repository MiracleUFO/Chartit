import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import sun from '../../imgs/sun.png';


export const CharterFinal = () => {

  //Gets charted truth value from redux store
  let selectCharted = (store) => store.charted;
  let charted = useSelector(selectCharted);


  //Additional styles based on store
  let sectionClass = charted ? 'charter-element' : 'charter-element hidden';


  return (
      <section className={sectionClass}>
        { !charted ? 
        <div>
          <img src={sun} />
        </div> 
        : null }

        { charted ? 
        <div id='preview'></div> 
        : null }

      { charted ? 
        <button className='submit-btn-active'>Download</button> 
        : null }
      </section>
  )
}