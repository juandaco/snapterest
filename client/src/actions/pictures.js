import { addUserPicture } from './user';

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
export const sendFetchPictures = pictures => dispatch => {
  dispatch(fetchPictures());
  return fetch(`/api/pictures`)
    .then(body => body.json())
    .then(resp => {
      if (resp.message) {
        dispatch(receivePictures(resp.pictures));
      }
    })
    .catch(err => console.log(err));
};

export const sendAddPicture = picture => dispatch => {
  const request = new Request(`/api/pictures/`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(picture),
    credentials: 'include',
  });
  return fetch(request)
    .then(body => body.json())
    .then(resp => {
      if (resp.message) {
        dispatch(addPicture(resp.picture));
        dispatch(addUserPicture(resp.picture._id));
      }
    })
    .catch(err => console.log(err));
};
