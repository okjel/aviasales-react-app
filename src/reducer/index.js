import { combineReducers } from 'redux';
import filter from './filter';
import sort from './sort';
import other from './other';
import tickets from './tickets';

export default combineReducers({
  filter,
  sort,
  tickets,
  other,
});
