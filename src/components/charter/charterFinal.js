import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import sun from '../../imgs/sun.png';
import preview from '../../imgs/preview.png';


export const CharterFinal = () => {

  const [state, setState] = useState({
    charting: false,
    downloadBtnClass: 'submit-btn'
  })


  //Gets charting truth value from redux store
  let selectcharting = (store) => store.charting;
  let charting = useSelector(selectcharting);


  //Sets button style based on state
  useEffect(() => {
    let downloadBtnClass = state.charting ? 'submit-btn-active' : 'submit-btn';
    setState({...state, downloadBtnClass: downloadBtnClass});
  }, [state.charting])


  //Additional styles based on store
  let sectionClass = charting ? 'charter-element' : 'charter-element hidden';
  let sectionId = charting ? 'third-charter-element-flex' : 'third-charter-element';


  return (
      <section className={sectionClass} id={sectionId}>
        
        { !charting ? 
        <div>
          <img src={sun} alt='Painted sun' />
        </div> 
        : null }

        { charting ? 
        <div id='preview'>
          <img src={preview} alt='Preview icon' id='preview-icon' />
        </div> 
        : null }

        { charting ? 
        <button className={state.downloadBtnClass}>Download</button> 
        : null }

      </section>
  )
}