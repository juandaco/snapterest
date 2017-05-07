import {
  LOGIN_USER,
  LOGOUT_USER,
  ADD_USER_PICTURE,
  REMOVE_USER_PICTURE,
} from '../actions/user';
import defaultUserState from '../helpers/defaultUserState';

const user = (state = defaultUserState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      const { username, profilePicture, pictures, liked } = action.user;
      return {
        ...state,
        username,
        profilePicture,
        pictures,
        liked,
      };
    case LOGOUT_USER:
      return defaultUserState;
    case ADD_USER_PICTURE:
      return {
        ...state,
        pictures: [...state.pictures, action.picture],
      };
    case REMOVE_USER_PICTURE:
      return {
        ...state,
        pictures: state.pictures.filter(picture => picture.id === action.id),
      };
    default:
      return state;
  }
};

export default user;
