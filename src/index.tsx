/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './configureStore';
import App from './App';
import './root.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
