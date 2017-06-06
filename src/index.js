import App from './components/App';
import { promiseMiddleware } from './middleware';
import ReactDOM from 'react-dom';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
	appName: 'medium-clone',
	articles: null
};

const reducer = (state = defaultState, action) => {
	return state;
};

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render((
  <Provider store={store}>
		<App />
	</Provider>
), document.getElementById('main'));
