import { combineReducers } from 'redux';
import { HomeReducer } from './Home';

export default combineReducers({
  home: HomeReducer
});
