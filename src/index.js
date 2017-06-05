import App from 'components/App';

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
}


ReactDOM.render((
  <Provider store={store}>
	<App />
	</Provider>
), document.getElementById('main'));
