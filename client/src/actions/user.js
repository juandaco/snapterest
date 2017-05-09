export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const ADD_USER_PICTURE = 'ADD_USER_PICTURE';
export const REMOVE_USER_PICTURE = 'REMOVE_USER_PICTURE';
export const ADD_USER_LIKED = 'ADD_USER_LIKED';
export const REMOVE_USER_LIKED = 'REMOVE_USER_LIKED';

export const loginUser = user => ({
  type: LOGIN_USER,
  user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const addUserPicture = pictureID => ({
  type: ADD_USER_PICTURE,
  pictureID,
});

export const removeUserPicture = pictureID => ({
  type: REMOVE_USER_PICTURE,
  pictureID,
});

export const addUserLiked = pictureID => ({
  type: ADD_USER_LIKED,
  pictureID,
});

export const removeUserLiked = pictureID => ({
  type: REMOVE_USER_LIKED,
  pictureID,
});

/*
  Async Actions
*/
export const getUserSession = () => dispatch => {
  return fetch(`api/users/current`, {
    accept: 'application/json',
    credentials: 'include',
  })
    .then(body => body.json())
    .then(resp => {
      if (resp.message) {
        delete resp.user._id;
        delete resp.user.__v;
        dispatch(loginUser(resp.user));
      }
    })
    .catch(err => console.log(err));
};

export const sendLogout = () => dispatch => {
  return fetch(`api/users/logout`, {
    accept: 'application/json',
    credentials: 'include',
  })
    .then(body => body.json())
    .then(resp => {
      if (resp.message) {
        dispatch(logoutUser());
      }
    })
    .catch(err => console.log(err));
};
