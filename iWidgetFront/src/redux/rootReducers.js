import { combineReducers } from "redux";
//import { commentReducer } from 'redux/subscribers/commentReducer.js'
//import { reducer } from 'redux/subscribers/reducer.js';

import commentReducer from './subscribers/commentReducer'
import reducer from './subscribers/reducer'

const rootReducer = combineReducers({
    comments: commentReducer,
    dashboard: reducer
})

export default rootReducer