import { LOGIN_USER, LOGOUT_USER, ADD_USER_PICTURE } from '../actions/user';
import defaultUserState from '../helpers/defaultUserState';

const user = (state = defaultUserState, action) => {
  switch (action) {
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
    default:
      return state;
  }
};

export default user;
