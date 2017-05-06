export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const ADD_USER_PICTURE = 'ADD_USER_PICTURE ';

export const loginUser = user => ({
  type: LOGIN_USER,
  user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const addUserSnap = snap => ({
  type: ADD_USER_PICTURE,
  snap,
});