import { combineReducers } from 'redux';
import user from './user';
import pictures from './pictures';
import dialog from './ui';

export default combineReducers({
  user,
  pictures,
  dialog,
});
