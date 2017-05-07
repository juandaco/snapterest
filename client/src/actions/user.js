export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const ADD_USER_PICTURE = 'ADD_USER_PICTURE';
export const REMOVE_USER_PICTURE = 'REMOVE_USER_PICTURE';
export const ADD_LIKED = 'ADD_LIKED';
export const REMOVE_LIKED = 'REMOVE_LIKED';

export const loginUser = user => ({
  type: LOGIN_USER,
  user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const addUserPicture = picture => ({
  type: ADD_USER_PICTURE,
  picture,
});

export const removeUserPicture = id => ({
  type: REMOVE_USER_PICTURE,
  id,
});

export const addLiked = id => ({
  type: ADD_LIKED,
  id,
});

export const removeLiked = id => ({
  type: REMOVE_LIKED,
  id,
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
}
