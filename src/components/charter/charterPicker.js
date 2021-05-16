import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendPicks } from '../../redux/actions/sendPicks';
import { sendCharting } from '../../redux/actions/sendCharting';
import { sendDataPairs } from '../../redux/actions/sendDataPairs';
import pieTip from '../../imgs/pie-tip.jpg';
import barTip from '../../imgs/bar-tip.jpg';
import histogramTip from '../../imgs/histogram-tip.jpg';
import ogiveTip from '../../imgs/ogive-tip.jpg';

export const CharterPicker = () => {

  //Gets data pairs from redux store
  let selectDataPairs = (store) => store.dataPairs;
  let dataPairs = useSelector(selectDataPairs);


  //Initializes useDispatch to allow sending data to redux store
  let dispatch = useDispatch();
  
  const [state, setState] = useState({
    pieChart: false,
    barChart: false,
    histogram: false,
    ogive: false
  });

  
  //Helper function to immutably change all an object's properties to a value
  const objectMap = (obj, fn) =>
    Object.fromEntries(
    Object.entries(obj).map(
    ([k, v], i) => [k, fn(v, k, i)]
    )
  );

  
  //Sets inputs in state
  let handleChange = (e) => {
    let name = e.target.name;
    state[name] ? setState({...state, [name]: false}) : setState({...state, [name]: true});
  }


  //Helper function to clear selected charts in state
  let clear = () => {
    let newState = objectMap(state, v => false);
    setState(newState);
  }


  //Clears selected charts in state
  let handleClear = (e) => {
    clear();
  }


  let picked = state.pieChart || state.barChart || state.histogram || state.ogive;

  
  //Sends relevant data to redux store on submit
  let handleSubmit =  (e) => {
    e.preventDefault();

    if (picked) {
      dispatch(sendPicks(state)); //Sends picked chart to redux store from state
      dispatch(sendCharting(false)); //Clears previous charting process

      //Clears previous dataPairs values (if any)
      let newDataPairs = objectMap(dataPairs, v => []);
      dispatch(sendDataPairs(newDataPairs));

      //Clears selected charts in state
      clear(); 
      
      //Scrolls to charterInputs
      if (window.innerWidth <= 800) {
        var top = document.getElementById('second-charter-element').getBoundingClientRect().top + window.scrollY;
        window.scroll({
          top: top,
          left: 100,
          behavior: 'smooth'
        });
      } 
    }
  }


  //Additional styles based on state
  let submitBtnClass = picked ? 'submit-btn-active' : 'submit-btn';


  return (
      <section className='charter-element' id='first-charter-element'>

          <form onSubmit={handleSubmit}>

            <h2>Choose a chart</h2>
            <div>
              <input type='checkbox' name='pieChart' value={state.piechart} checked={state.pieChart} onChange={handleChange} />
              <label>Pie Chart</label>
              <div className='tooltip-wrapper'><img src={pieTip} alt='Pie chart tooltip' /></div>
            </div><br />

            <div>
              <input type='checkbox' name='barChart' value={state.barChart} checked={state.barChart} onChange={handleChange} />
              <label>Bar Chart</label>
              <div className='tooltip-wrapper'><img src={barTip} alt='Bar chart tooltip' /></div>
            </div><br />

            <div>
              <input type='checkbox' name='histogram' value={state.histogram} checked={state.histogram} onChange={handleChange} />
              <label>Histogram</label>
              <div className='tooltip-wrapper'><img src={histogramTip} alt='Histogram chart tooltip' /></div>
            </div><br />

            <div>
              <input type='checkbox' name='ogive' value={state.ogive} checked={state.ogive} onChange={handleChange} />
              <label>Ogive</label>
              <div className='tooltip-wrapper'><img src={ogiveTip} alt='Ogive chart tooltip' /></div>
            </div><br />

          </form>

          <div id='clear-container'>
            <span className='clear-btn' onClick={handleClear}>Clear</span>
            <button onClick={handleSubmit} className={submitBtnClass}>Next</button>
          </div>
      </section>
  )
}