import {useState} from 'react';

export const CharterPicker = () => {
  const [state, setState] = useState({
    pieChart: false,
    barChart: false,
    histogram: false
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
    let newState = objectMap(state, v => !v);
    setState({...state, [state]: newState})
    console.log(newState) 
  }

  let handleSubmit =  (e) => {
    e.preventDefault();
    console.log('i');
  }

  return (
      <section className='charter-element'>
          <form onSubmit={handleSubmit}>
            <div><input type='checkbox' name='pieChart' value={state.piechart} checked={state.piechart} onChange={handleChange} /> <label>Pie Chart</label></div> <br />
            <div><input type='checkbox' name='barChart' value={state.barChart} checked={state.barChart} onChange={handleChange} /> <label>Bar Chart</label></div> <br />
            <div><input type='checkbox' name='histogram' value={state.histogram} checked={state.histogram} onChange={handleChange} /> <label>Histogram</label></div> <br />
            <div><div className='clear-btn' onClick={handleClear}>Clear</div> <button className='Submit'>Next</button></div>
          </form>
      </section>
  )
}