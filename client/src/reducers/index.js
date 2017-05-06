import { combineReducers } from 'redux';
import user from './user';
import pictures from './pictures';

export default combineReducers({
  user,
  pictures,
});
