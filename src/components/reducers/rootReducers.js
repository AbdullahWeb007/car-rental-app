import { combineReducers } from "redux";

import reducers from "./reducers";

const AllReducers = combineReducers({
  data: reducers
})

export default AllReducers