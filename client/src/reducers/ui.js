import { 
  SHOW_NEW_DIALOG, 
  HIDE_NEW_DIALOG,
  SHOW_ABOUT_DIALOG, 
  HIDE_ABOUT_DIALOG,
} from '../actions/ui';

const ui = (state = {
  newDialog: false,
  aboutDialog: false,
}, action) => {
  switch(action.type) {
    case SHOW_NEW_DIALOG:
      return {
        ...state,
        newDialog: true,
      };
    case HIDE_NEW_DIALOG:
      return {
        ...state,
        newDialog: false,
      };
    case SHOW_ABOUT_DIALOG:
      return {
        ...state,
        aboutDialog: true,
      };
    case HIDE_ABOUT_DIALOG:
      return {
        ...state,
        aboutDialog: false,
      };
    default: 
      return state;
  }
}

export default ui;