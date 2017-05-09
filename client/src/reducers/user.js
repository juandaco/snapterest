import {
  LOGIN_USER,
  LOGOUT_USER,
  ADD_USER_PICTURE,
  REMOVE_USER_PICTURE,
  ADD_USER_LIKED,
  REMOVE_USER_LIKED,
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
      let newPictures = state.pictures.slice();
      newPictures.push(action.pictureID);
      return {
        ...state,
        pictures: newPictures,
      };
    case REMOVE_USER_PICTURE:
      return {
        ...state,
        pictures: state.pictures.filter(
          picture => picture._id !== action.pictureID,
        ),
      };
    case ADD_USER_LIKED:
      let newLiked = state.liked.slice();
      newLiked.push(action.pictureID);
      return {
        ...state,
        liked: newLiked,
      };
    case REMOVE_USER_LIKED:
      return {
        ...state,
        liked: state.liked.filter(id => id !== action.pictureID),
      };
    default:
      return state;
  }
};

export default user;
