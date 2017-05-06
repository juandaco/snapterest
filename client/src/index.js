import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import Root from './containers/Root';
import './index.css';

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root'),
);

/*
  Enabling Component Hot Reloading
*/
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store}/>
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
