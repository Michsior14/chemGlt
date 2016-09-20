import { Meteor } from "meteor/meteor";

import React, {Component, PropTypes} from "react";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import {syncHistoryWithStore, routerMiddleware} from "react-router-redux";
import {push as pushPath} from "react-router-redux";

import Routes from "/imports/ui/Routes";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import appReducer from "/lib/reducers/appReducer";


let store = createStore(
    appReducer,
    compose(
        applyMiddleware(thunk),
        applyMiddleware(routerMiddleware(browserHistory)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

const history = syncHistoryWithStore(browserHistory, store);

const muiTheme = getMuiTheme({});


let Root = ({}) => {    
    return(
        <Provider store={store}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router history={history}>
                    {Routes}
                </Router>
            </MuiThemeProvider>
        </Provider>
    );
};



export default Root;