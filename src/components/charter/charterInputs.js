import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import sun from '../../imgs/sun.png';

export const CharterInputs = () => {
  const [state, setState] = useState({
    controls: {
      pieChart: false,
      barChart: false,
      histogram: false,
      ogive: false
    }
  });

  let selectPicks = (store) => store.chartPicks;
  let chartPicks = useSelector(selectPicks);
  
  useEffect(() => {
    for ( const [k,v] of Object.entries(chartPicks)) {
      if (v) {
       var newControls = {...state.controls};
        newControls[k] = true;
        setState({...state, controls: newControls})
        return false;
      }
    }
  }, [chartPicks]);

  
  let picked = chartPicks.pieChart || chartPicks.barChart || chartPicks.histogram || chartPicks.ogive;

  let handleNext = () => {

  }

  let handleInputs = () => {

  }

  let handleSubmit = (e) => {
    e.preventDefault();
  }

  let submitBtnClass = picked ? 'submit-btn-active' : 'submit-btn';
  let sectionClass = picked ? 'charter-element' : 'charter-element hidden';

  return (
      <section className={sectionClass} id='second-charter-element'>
        { !picked ? 
        <div>
          <img src={sun} />
        </div> 
        : null }

        <div id='second-charter-element-form-wrapper'>
          {state.controls.pieChart ?
          <form id='pie-form'>
            <div>
              <h2>Pie chart</h2>
              <input placeholder='label' /> <br /> <input placeholder='valueaa' /> <br />
              <button>Submit</button>
            </div> 
          </form>
          : null}

          {state.controls.barChart ?
          <form id='bar-form'>
            <div>
              <h2>Bar chart</h2>
              <input placeholder='label' /> <br /> <input placeholder='value' /> <br />
              <button>Submit</button>
            </div>
          </form>
          : null}

          {state.controls.histogram ?
          <form id='histogram-form'>
            <div>
              <h2>Histogram chart</h2>
              <input placeholder='label' /> <br /> <input placeholder='value' /> <br />
              <button>Submit</button>
            </div>
          </form>
          : null}

          {state.controls.ogive ?
          <form id='ogive-form'>
            <div>
              <h2>Ogive chart</h2>
              <input placeholder='label' /> <br /> <input placeholder='value' /> <br />
              <button>Submit</button>
            </div>
          </form>
          : null}

          <div><span className='clear-btn'>Back</span><button className={submitBtnClass} onClick={handleSubmit}>Next</button></div>
        </div>  
        </section>
  )
}