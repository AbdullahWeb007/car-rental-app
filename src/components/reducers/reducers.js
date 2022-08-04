const initialState = {
  data: ""
}
const reducers = (state = initialState, actions) => {
  if (actions.type == "GET_DATA") {
    return {
      ...state,
      data: actions.payload
    }
  }
  else {
    return state
  }
}
export default reducers