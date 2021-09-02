import { createStore, applyMiddleware } from 'redux'
//import reducer from './subscribers/reducer'
import rootReducer from './rootReducers';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;