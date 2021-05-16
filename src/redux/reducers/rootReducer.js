const initState = {
  chartPicks: {
    pieChart: false,
    barChart: false,
    histogram: false,
    ogive: false
  },
  charted: false
}

const rootReducer = (state = initState, action) => {
  if (action.type === "SEND_PICKS") {
    const { playerDeets, ...newState } = state; //Remove previous picked charts value immutably
      return Object.assign({}, newState, {chartPicks: action.payload}) //Adds new one from action payload
    }
  
    if (action.type === "SEND_CHARTED") {
      return Object.assign({}, state, {charted: action.payload});
    }

    return state;
  }

export default rootReducer;
