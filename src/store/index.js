import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
// Reducers
import pageloading from "../modules/pageloadings";

/* 
	Combine Reducers
*/
const reducers = combineReducers({
  pageloading,
});

/* 
	Create Store
*/
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
