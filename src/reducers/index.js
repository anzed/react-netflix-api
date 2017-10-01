import { combineReducers } from 'redux';
import films from './filmsReducers';

const rootReducer = combineReducers({
  films
});

export default rootReducer;
