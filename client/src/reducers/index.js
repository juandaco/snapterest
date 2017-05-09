import { combineReducers } from 'redux';
import user from './user';
import pictures from './pictures';
import ui from './ui';

export default combineReducers({
  user,
  pictures,
  ui,
});
