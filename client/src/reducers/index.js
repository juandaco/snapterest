import { combineReducers } from 'redux';
import { REQUEST_IP, RECEIVE_IP } from '../actions';

/*
  Only One Reducer with Spread
*/
// const ipExample = (
//   state = {
//     ip: '',
//     isFetching: false,
//   },
//   action,
// ) => {
//   switch (action.type) {
//     case REQUEST_IP:
//       return {
//         ...state,
//         isFetching: true,
//       };
//     case RECEIVE_IP:
//       return {
//         ...state,
//         ip: action.ip,
//         isFetching: false,
//       };
//     default:
//       return state;
//   }
// }

/*
  With Reducer Composition
*/
function ip(state = '', action) {
  if (action.type === RECEIVE_IP) {
    return action.ip;
  }
  return state;
}

function isFetching(state = false, action) {
  switch (action.type) {
    case REQUEST_IP:
      return true;
    case RECEIVE_IP:
      return false;
    default:
      return state;
  }
}

const ipExample = combineReducers({
  ip,
  isFetching,
});

export default ipExample;
