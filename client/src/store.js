import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middleware = [thunk];

/*
  Add middleware based on enviroment if desired
*/
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }

/*
  For Redux Dev Tools in Chrome
*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
  Explicit Hot Reloading Reducer (see https://github.com/reactjs/react-redux/releases/tag/v2.0.0)
*/
export default (function configureStore() {
  const store = createStore(
    reducer,
    // For Redux Dev Tools and Middlware
    composeEnhancers(applyMiddleware(...middleware)),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
})();