import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../redux/store';
import App from './App';

const Root = () => (
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>
);

export default Root;
