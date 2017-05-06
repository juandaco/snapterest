/*
  Internal or External API Calls
*/
function simpleGetExample() {
  return fetch(`/api/items`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON);
}

function getWithAuthentication() {
  return fetch('/api/users/items', {
    accept: 'application/json',
    credentials: 'include', // With Session Authentication
  })
    .then(checkStatus)
    .then(parseJSON);
}

function getWithParams(id) {
  return fetch(`/api/items/${id}`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON);
}

function putExample(id, updateRequest) {
  const request = new Request(`/api/items/${id}`, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      updateRequest,
    }),
    credentials: 'include', // Authenticated
  });
  return fetch(request).then(checkStatus).then(parseJSON);
}

function postExample(item) {
  const request = new Request(`/api/items/`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(item),
    credentials: 'include', // Authenticated
  });
  return fetch(request).then(checkStatus).then(parseJSON);
}

function deleteExample(id) {
  return fetch(`/api/items/${id}`, {
    method: 'DELETE',
    accept: 'application/json',
    credentials: 'include', // Authenticated
  })
    .then(checkStatus)
    .then(parseJSON);
}

// External API call to get IP
function getIP() {
  return fetch(`https://api.ipify.org?format=json`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON);
}

/*
  Generic functions
*/
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const ApiCalls = {
  simpleGetExample,
  getWithAuthentication,
  getWithParams,
  putExample,
  postExample,
  deleteExample,
  getIP,
};

export default ApiCalls;
