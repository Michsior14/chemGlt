import React, {Component, PropTypes} from "react";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import appReducer from '/lib/reducers/appReducer'
import App from '/imports/ui/App';

let store = createStore(
    appReducer,
    compose(
    	applyMiddleware(thunk),
    	window.devToolsExtension ? window.devToolsExtension() : f => f
    )    
);

let Root = ({}) => {
	return (
		<Provider store={store}>
			<App/>
		</Provider>
	);
};

export default Root;