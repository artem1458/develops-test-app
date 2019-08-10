import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './redux/reducer';

import App from './components/app';

import BlogService from './services/blog-service';

const api = new BlogService();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
