import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'redux-bundler-react';
import App from './App';
import getStore from './bundles';


import cache from './utils/cache';

const render = ({ store }) => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

// this is entirely optional, but here we here we try to pull starting data
// from our local cache. We're using a util called money-clip here that
// will only return if the version number is a match and it's not
// older than the specified maxAge.
cache.getAll().then((initialData) => {
  if (initialData) {
    console.log('starting with locally cache data:', initialData);
  }
  render({ store: getStore(initialData) });
});
