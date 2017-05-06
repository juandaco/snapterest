export const REQUEST_IP = 'REQUEST_IP';
export const RECEIVE_IP = 'RECEIVE_IP';

/*
  Basic Synch Actions
*/
export const requestIP = () => ({ type: REQUEST_IP });

export const receiveIP = ip => ({
  type: RECEIVE_IP,
  ip,
});

/*
  Thunk for async API Calls
*/
export const fetchIP = () => dispatch => {
  dispatch(requestIP());
  return fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(json => dispatch(receiveIP(json.ip)));
};
