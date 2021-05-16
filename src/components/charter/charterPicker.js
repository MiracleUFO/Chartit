import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendPicks } from '../../redux/actions/sendPicks';
import { sendCharted } from '../../redux/actions/sendCharted';
import pieTip from '../../imgs/pie-tip.jpg';
import barTip from '../../imgs/bar-tip.jpg';
import histogramTip from '../../imgs/histogram-tip.jpg';
import ogiveTip from '../../imgs/ogive-tip.jpg';

export const CharterPicker = () => {
  const [state, setState] = useState({
    pieChart: false,
    barChart: false,
    histogram: false,
    ogive: false
  });

  let handleChange = (e) => {
    let name = e.target.name;
    state[name] ? setState({...state, [name]: false}) : setState({...state, [name]: true});
  }

  let clear = () => {
    const objectMap = (obj, fn) =>
      Object.fromEntries(
      Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
      )
    );
    let newState = objectMap(state, v => false);
    setState(newState);
  }

  let handleClear = (e) => {
    clear();
  }

  let picked = state.pieChart || state.barChart || state.histogram || state.ogive;

  let dispatch = useDispatch();

  let handleSubmit =  (e) => {
    e.preventDefault();
    if (picked) {
      dispatch(sendPicks(state));
      dispatch(sendCharted(false));
      clear();
      
      if (window.innerWidth <= 800) {
        //let top = window.pageYOffset + 500;
        var top = document.getElementById('second-charter-element').getBoundingClientRect().top + window.scrollY;
        window.scroll({
          top: top,
          left: 100,
          behavior: 'smooth'
        });
      } 
    }
  }

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