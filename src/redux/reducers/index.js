import { combineReducers } from 'redux';

import { counterReducer } from './counterReducer';
import { movieReducer } from './movieReducer';
const rootReducer = combineReducers({
  counterReducer,
  movieReducer,
});

export default rootReducer;
