const GET_DATA = "GET_DATA"

export const GetCityData = (data) => {
  return (dispatch) => {
    dispatch({
      type: GET_DATA,
      payload: data
    })
    console.log(data)
  }
}