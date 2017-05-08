import { SHOW_DIALOG, HIDE_DIALOG } from '../actions/ui';

const dialog = (state = false, action) => {
  switch(action.type) {
    case SHOW_DIALOG:
      return true;
    case HIDE_DIALOG:
      return false;
    default: 
      return state;
  }
}

export default dialog;