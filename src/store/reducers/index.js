import { combineReducers } from 'redux';
import additonReducer from "./additionReducer";
import counterReducer from "./counterReducer";
import multiplyReducers from "./multiplyReducers";
import resetReducer from "./resetReducer";
import substractionReducer from "./substractionReducer";

export const rootReducers = combineReducers(
    {
        count: counterReducer,
        addition: additonReducer,
        multiply: multiplyReducers,
        reset: resetReducer,
        substraction: substractionReducer
    }
)
