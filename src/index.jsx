/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

render();
