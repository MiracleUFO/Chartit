import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Splide, SplideSlide} from '@splidejs/react-splide';
//import { Chart } from "react-google-charts";
import sun from '../../imgs/sun.png';
import preview from '../../imgs/preview.png';


export const CharterFinal = () => {

  //Gets charting truth value from redux store
  let selectCharting = (store) => store.charting;
  let charting = useSelector(selectCharting);


  //Gets data pairs from redux store
  let selectDataPairs = (store) => store.dataPairs;
  let dataPairs = useSelector(selectDataPairs);


  //Component state
  const [state, setState] = useState({
    charting: false,
    downloadBtnClass: 'submit-btn',
    controls: {
      pieChartPairs: false,
      barChartPairs: false,
      histogramPairs: false,
      ogivePairs: false, 
    },
  })


  //Displays SplideSlides based on dataPairs & Draws charts
  useEffect(() => {
    let newControls = {...state.controls};
    for (const [k,v] of Object.entries(dataPairs)) {
      if (v.length > 0) {
        newControls[k] = true;
      }
      setState({...state, controls: newControls});
    }
  }, [dataPairs]);     // eslint-disable-line react-hooks/exhaustive-deps


 
  useEffect(() => {
    setState({...state, charting: true});
  }, [state.controls]);     // eslint-disable-line react-hooks/exhaustive-deps


  
  //Sets button style based on state
  useEffect(() => {
    let downloadBtnClass = state.charting ? 'submit-btn-active' : 'submit-btn';
    setState({...state, downloadBtnClass: downloadBtnClass});
  }, [state.charting]);     // eslint-disable-line react-hooks/exhaustive-deps


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
          { !state.charting ?
            <img src={preview} alt='Preview icon' id='preview-icon' />
          : 
            <Splide id='feed'
            options={ {
              autoplay : false,
              interval : 3000,
              speed : 500,
              rewind : true,
              rewindSpeed: 1500,
              perPage : 1,
              pauseOnHover : false,
              pauseOnFocus : false, 
              easing : 'ease',
              gap    : '1rem',
            } }
            >

              { state.controls.pieChartPairs ?
              <SplideSlide id='pieChart-slide'> Pie Chart
                {/*<Chart
                  chartType="PieChart"
                  data={dataPairs.pieChartPairs.length > 0 ? {[...dataPairs.pieChartPairs]} : {}}
                  options={{title: "Pie Chart"}}
                  width="80%"
                  height="400px"
                  legendToggle
                />*/}
              </SplideSlide>
              : null }
              
              { state.controls.barChartPairs ?
              <SplideSlide id='barChart-slide'>BarChart
                {/*<Chart
                  chartType="BarChart"
                  data={dataPairs.barChartPairs.length > 0 ? {[...dataPairs.barChartPairs]} : {}}
                  options={{title: "Bar Chart"}}
                  width="80%"
                  height="400px"
                  legendToggle
                />*/}
              </SplideSlide>
              : null }
              
              { state.controls.histogramPairs ?
              <SplideSlide id='histogram-slide'>Histogram
                {/*<Chart
                  chartType="Histogram"
                  data={dataPairs.histogramPairs.length > 0 ? {[...dataPairs.histogramPairs]} : {}}
                  options={{title: "Histogram"}}
                  width="80%"
                  height="400px"
                  legendToggle
                />*/}
              </SplideSlide>
              : null }

              { state.controls.ogivePairs ?
              <SplideSlide id='ogive-slide'>Ogive
                {/*<Chart
                  chartType="Ogive"
                  data={dataPairs.ogivePairs.length > 0 ? {[...dataPairs.ogivePairs]} : {}}
                  options={{title: "Ogive"}}
                  width="80%"
                  height="400px"
                  legendToggle
                />*/}
              </SplideSlide>
              : null }

            </Splide>
          }

        </div> 
        : null }

        { charting ? 
        <button className={state.downloadBtnClass}>Download</button> 
        : null }

      </section>
  )
}