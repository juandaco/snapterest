export const FETCH_PICTURES = 'FETCH_PICTURES';
export const RECEIVE_PICTURES = 'RECEIVE_PICTURES';
export const ADD_PICTURE = 'ADD_PICTURE';
export const REMOVE_PICTURE = 'REMOVE_PICTURE';
export const LIKE_PICTURE = 'LIKE_PICTURE';
export const UNLIKE_PICTURE = 'UNLIKE_PICTURE';

export const fetchPictures = () => ({
  type: FETCH_PICTURES,
});

export const receivePictures = pictures => ({
  type: RECEIVE_PICTURES,
  pictures,
});

export const addPicture = picture => ({
  type: ADD_PICTURE,
  picture,
});

export const removePicture = id => ({
  type: REMOVE_PICTURE,
  id,
});

export const likePicture = id => ({
  type: LIKE_PICTURE,
  id,
});

export const unlikePicture = id => ({
  type: UNLIKE_PICTURE,
  id,
});

/*
  Async Actions
*/
// export const sendFetchPictures = pictures => dispatch => {
//   return fetch(``)
//     .then(body => body.json())
//     .then(resp => {})
//     .catch(err => console.log(err));
// };
