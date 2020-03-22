/**
 * App Reducers
 */
import { combineReducers } from "redux";

import { MainReducer } from "./ducks/mainpage";


const reducers = combineReducers({
    mainState: MainReducer,
});

export default reducers;
