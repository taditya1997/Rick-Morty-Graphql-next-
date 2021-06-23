import { createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import numberReducer from "./actions/reducer";

const store= createStore(numberReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store;
