import React, {Component, PropTypes} from "react";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import appReducer from '/lib/reducers/appReducer'
import App from '/imports/ui/App';

let store = createStore(
    appReducer,
    applyMiddleware(thunk)
);

let Root = ({}) => {
	return (
		<Provider store={store}>
			<App/>
		</Provider>
	);
};

export default Root;