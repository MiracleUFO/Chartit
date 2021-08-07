const initState = {
  chartPicks: {
    pieChart: false,
    barChart: false,
    histogram: false,
    ogive: false
  },
  charting: false,
  dataPairs: {
    pieChartPairs: [],
    barChartPairs: [],
    histogramPairs: [],
    ogivePairs: []
  }
}

const rootReducer = (state = initState, action) => {
  
  if (action.type === "SEND_PICKS") {
    const { chartPicks, ...newState } = state; //Remove previous picked charts value immutably
      return Object.assign({}, newState, {chartPicks: action.payload}) //Adds new one from action payload
    }
  
    if (action.type === "SEND_CHARTING") {
      return Object.assign({}, state, {charting: action.payload});
    }

    if (action.type === "SEND_DATAPAIRS") {
      const { dataPairs, ...newState } = state; //Remove previous picked charts value immutably
      return Object.assign({}, newState, {dataPairs: action.payload}) //Adds new one from action payload
    }

    return state;
  }

export default rootReducer;
