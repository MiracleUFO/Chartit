import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendPicks } from '../../redux/actions/sendPicks';
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

  let handleClear = (e) => {
    const objectMap = (obj, fn) =>
      Object.fromEntries(
      Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
      )
    )
    let newState = objectMap(state, v => false);
    setState(newState);
  }

  let picked = state.pieChart || state.barChart || state.histogram || state.ogive;

  let dispatch = useDispatch();

  let handleSubmit =  (e) => {
    e.preventDefault();
    console.log(picked);
    if (picked) {
      console.log('sending');
      dispatch(sendPicks(state));
    }
  }

  let submitBtnClass = picked ? 'submit-btn-active' : 'submit-btn';

  return (
      <section className='charter-element'>
          <form onSubmit={handleSubmit}>
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

            <div><span className='clear-btn' onClick={handleClear}>Clear</span> <button className={submitBtnClass}>Next</button></div>
          </form>
      </section>
  )
}