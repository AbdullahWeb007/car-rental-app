import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools }          from 'redux-devtools-extension';
import thunk                            from "redux-thunk";
import AllReducers                      from "./reducers/rootReducers";

const store = createStore(AllReducers, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store