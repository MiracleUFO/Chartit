import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { sendCharting } from '../../redux/actions/sendCharting';
import { sendDataPairs } from '../../redux/actions/sendDataPairs';
import sun from '../../imgs/sun.png';


export const CharterInputs = () => {

  //Gets selected charts from redux store
  let selectPicks = (store) => store.chartPicks;
  let chartPicks = useSelector(selectPicks);


  //Gets data pairs from redux store
  let selectDataPairs = (store) => store.dataPairs;
  let dataPairs = useSelector(selectDataPairs);


  //Initializes useDispatch to allow sending data to redux store
  let dispatch = useDispatch();


  const [state, setState] = useState({
    chartPicks: {...chartPicks},
    controls: {
      pieChart: false,
      barChart: false,
      histogram: false,
      ogive: false, 
    },
    charting: false,
    inputted: false,
    i: 0,
    nextBtnClass: 'submit-btn',
    submitBtnClass: 'submit-btn',
    inputs: {
      pieChartLabel: '',
      pieChartValue: '',
      barChartLabel: '',
      barChartValue: '',
      histogramLabel: '',
      histogramValue: '',
      ogiveLabel: '',
      ogiveValue: ''
    },
    dataPairs: {...dataPairs}
  });
  

  //Helper function to immutably change all an object's properties to a value
  const objectMap = (obj, fn) =>
    Object.fromEntries(
      Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)])
  );


  //Sets inputs in state
  let handleInput = (e) => {
    let name = e.target.name;
    let newInputs = {...state.inputs};
    newInputs[name] = e.target.value;
    setState({...state, inputs: newInputs});
  }


  //Pushes corresponding form data to state for charting
  let handleSubmit = (e) => {
    e.preventDefault();
    let formName = e.target.getAttribute('data-name');
    let dataPairs = [];

    switch (formName) {
      case 'pieChartPairs':
        dataPairs.push(state.inputs.pieChartLabel);
        dataPairs.push(Number(state.inputs.pieChartValue));
        break;

      case 'barChartPairs':
        dataPairs.push(state.inputs.barChartLabel);
        dataPairs.push(Number(state.inputs.barChartValue));
        break;

      case 'histogramPairs':
        dataPairs.push(state.inputs.histogramLabel);
        dataPairs.push(Number(state.inputs.histogramValue));
        break;

      case 'ogivePairs':
        dataPairs.push(state.inputs.ogiveLabel);
        dataPairs.push(Number(state.inputs.ogiveValue));
        break;

      default:
        break;
    }

    for ( const [k,v] of Object.entries(state.dataPairs)) {
      if (k === formName) {
        let newDataPairs = {...state.dataPairs};
        newDataPairs[k].push(dataPairs);
        setState({...state, dataPairs: newDataPairs});
        console.log(v);
      }
    }
  }


  //Displays next picked chart using state.controls
  let handleNext = () => {
    if (state.inputted && !state.charting) {
      let iter = {...chartPicks};
      let newChartPicks = {...state.chartPicks};
      let newControls = objectMap(state.controls, v => false); //Sets all state.controls properties to false
      let i = state.i;

      for (const [k,v] of Object.entries(newChartPicks)) {  //Makes first pick in chartPicks false
        if (v) {
          newChartPicks[k] = false;
        }

        Object.entries(iter).forEach(item => {
          if (!v) {
            delete iter[k];
          }
        });

        for (const [key,val] of Object.entries(newChartPicks)) {  //Sets next pick in chartPicks to true in state.controls
          if (val) {
            i++;
            newControls[key] = true;
            newChartPicks[key] = false;
            setState({...state, controls: newControls, chartPicks: newChartPicks, i: i});
            return false;
          } 

          if (i === Object.keys(iter).length || Object.keys(iter).length === 1) {
            setState({...state, charting: true, chartPicks: newChartPicks, i: 0});
            dispatch(sendDataPairs(state.dataPairs));

            //Scrolls to charterFinal
            if (window.innerWidth <= 800) {
              var top = document.getElementById('third-charter-element').getBoundingClientRect().top + window.scrollY;
              window.scroll({
                top: top,
                left: 100,
                behavior: 'smooth'
              });
            } 
            return false;
          }     
        }  
      }
    }
  }


  //Displays previous picked chart using state.controls
  let handleBack = (e) => {

  }


  //Displays first picked chart using state.controls
  useEffect(() => { 
    let newState = objectMap(state.controls, v => false); //Sets all state.controls properties to false

    for (const [k,v] of Object.entries(chartPicks)) {  //Sets only first pick in chartPicks to true in state.controls
      if (v) {
        let newControls = {...newState};
        newControls[k] = true;
        setState({
          ...state,
          controls: newControls,
          inputted: false,
          charting: false,
          i: 0,
          chartPicks: {...chartPicks}
        });   // eslint-disable-next-line react-hooks/exhaustive-deps
        return false;
      }   
    }
  }, [chartPicks]);   // eslint-disable-next-line react-hooks/exhaustive-deps


  //Changes submit button style when data is inputted
  useEffect(() => {
    let submitBtnClass;

    for (const [k,v] of Object.entries(state.controls)) {
      if (v) {
        submitBtnClass = state.inputs[`${k}Value`] && state.inputs[`${k}Label`] ? 'submit-btn-active' : 'submit-btn';   // eslint-disable-next-line react-hooks/exhaustive-deps
        setState({...state, submitBtnClass: submitBtnClass});
      }
    }
  }, [state.inputs]);   // eslint-disable-next-line react-hooks/exhaustive-deps


  //Clears input fields on submit
  useEffect(() => {
    for (const [k,v] of Object.entries(state.controls)) {
      if (v) {
        let submitBtnClass = state.inputs[`${k}Value`] && state.inputs[`${k}Label`] ? 'submit-btn-active' : 'submit-btn';
        let newInputs = objectMap(state.inputs, v => '');
        let inputted = state.dataPairs[`${k}Pairs`].length !== 0;

        setState({
          ...state,
          inputted: inputted, 
          nextBtnClass: inputted ? 'submit-btn-active' : 'submit-btn',
          submitBtnClass: submitBtnClass,
          inputs: newInputs,    // eslint-disable-next-line react-hooks/exhaustive-deps
        });
      }
    } 
  }, [state.dataPairs]);    // eslint-disable-next-line react-hooks/exhaustive-deps


  //Clears input fields and changes submit button style on next
  useEffect(() => {
    for (const [k,v] of Object.entries(state.controls)) {
      if (v) {
        let inputted = state.dataPairs[`${k}Pairs`].length !== 0;
        let newInputs = objectMap(state.inputs, v => '');
        setState({
          ...state,
          inputted: inputted, 
          nextBtnClass: inputted ? 'submit-btn-active' : 'submit-btn',
          inputs: newInputs,    // eslint-disable-next-line react-hooks/exhaustive-deps
        });
      }
    } 
  }, [state.controls]);   // eslint-disable-next-line react-hooks/exhaustive-deps


  //Sends charting to redux store for subscribed components
  useEffect(() => {
    if (state.charting) {
      dispatch(sendCharting(state.charting));
      setState({
        ...state,   // eslint-disable-next-line react-hooks/exhaustive-deps
        nextBtnClass: !state.charting ? 'submit-btn-active' : 'submit-btn',
      });
    }
  }, [state.charting]);   // eslint-disable-next-line react-hooks/exhaustive-deps


  //Additional styles based on store
  let picked = chartPicks.pieChart || chartPicks.barChart || chartPicks.histogram || chartPicks.ogive;
  let sectionClass = picked ? 'charter-element' : 'charter-element hidden';


  return (
      <section className={sectionClass} id='second-charter-element'>

        { !picked ? 
        <div>
          <img src={sun} alt='Painted sun' />
        </div> 
        : null }

        <div id='second-charter-element-form-wrapper'>

          { state.controls.pieChart ?
          <form id='pie-form' data-name='pieChartPairs' onSubmit={handleSubmit}>
            <div>
              <h2>Pie chart</h2>
              <input placeholder='Label' value={state.inputs.pieChartLabel} name='pieChartLabel' onChange={handleInput} required /> <br /> 
              <input placeholder='Value' value={state.inputs.pieChartValue} name='pieChartValue' onChange={handleInput} required pattern="^[+]?([0-9]*(?:[\.][0-9]*)?|0*\.0*[0-9]*)$" /> <br />
              <button className={state.submitBtnClass}>Submit</button>
            </div> 
          </form>
          : null }

          { state.controls.barChart ?
          <form id='bar-form' data-name='barChartPairs' onSubmit={handleSubmit}>
            <div>
              <h2>Bar chart</h2>
              <input placeholder='Label' value={state.inputs.barChartLabel} name='barChartLabel' onChange={handleInput} required /> <br /> 
              <input placeholder='Value' value={state.inputs.barChartValue} name='barChartValue' onChange={handleInput} required pattern="^[+]?([0-9]*(?:[\.][0-9]*)?|0*\.0*[0-9]*)$" /> <br />
              <button className={state.submitBtnClass}>Submit</button>
            </div>
          </form>
          : null }

          { state.controls.histogram ?
          <form id='histogram-form' data-name='histogramPairs' onSubmit={handleSubmit}>
            <div>
              <h2>Histogram</h2>
              <input placeholder='Label' value={state.inputs.histogramLabel} name='histogramLabel' onChange={handleInput} required /> <br /> 
              <input placeholder='Value' value={state.inputs.histogramValue} name='histogramValue' onChange={handleInput} required pattern="^[+]?([0-9]*(?:[\.][0-9]*)?|0*\.0*[0-9]*)$" /> <br />
              <button className={state.submitBtnClass}>Submit</button>
            </div>
          </form>
          : null }

          { state.controls.ogive ?
          <form id='ogive-form' data-name='ogivePairs' onSubmit={handleSubmit}>
            <div>
              <h2>Ogive</h2>
              <input placeholder='Label' value={state.inputs.ogiveLabel} name='ogiveLabel' onChange={handleInput} required /> <br /> 
              <input placeholder='Value' value={state.inputs.ogiveValue} name='ogiveValue' onChange={handleInput} required pattern="^[+]?([0-9]*(?:[\.][0-9]*)?|0*\.0*[0-9]*)$" /> <br />
              <button className={state.submitBtnClass}>Submit</button>
            </div>
          </form>
          : null }

          { picked ?
          <div>
            <span className='clear-btn' onClick={handleBack}>Back</span>
            <button className={state.nextBtnClass} onClick={handleNext}>Next</button>
          </div>
          : null }

        </div>  
        </section>
  )
}