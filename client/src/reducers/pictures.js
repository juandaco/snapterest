import {
  FETCH_PICTURES,
  RECEIVE_PICTURES,
  ADD_PICTURE,
  REMOVE_PICTURE,
  LIKE_PICTURE,
  UNLIKE_PICTURE,
} from '../actions/pictures';

const pictures = (
  state = {
    isFetching: false,
    items: [],
  },
  action,
) => {
  switch (action.type) {
    case FETCH_PICTURES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PICTURES:
      return {
        isFetching: false,
        items: action.pictures,
      };
    case ADD_PICTURE:
      let newItems = state.items.slice();
      newItems.push(action.picture);
      return {
        ...state,
        items: newItems,
      };
    case REMOVE_PICTURE:
      return {
        ...state,
        items: state.items.filter(picture => picture._id === action.id),
      };
    case LIKE_PICTURE:
      return {
        ...state,
        items: state.items.map(picture => {
          if (picture._id === action.id) {
            picture.likes++;
          }
          return picture;
        }),
      };
    case UNLIKE_PICTURE:
      return {
        ...state,
        items: state.items.map(picture => {
          if (picture._id === action.id) {
            picture.likes--;
          }
          return picture;
        }),
      };
    default:
      return state;
  }
};

export default pictures;
