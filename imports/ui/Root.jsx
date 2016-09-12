import React, {Component, PropTypes} from "react";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import appReducer from "/lib/reducers/appReducer";
import App from "/imports/ui/App";
import TextEditor from "/imports/ui/text_editor/TextEditor";
import Home from "/imports/ui/Home";
import Error404 from "/imports/ui/errors/Error404";

let store = createStore(
    appReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

const history = syncHistoryWithStore(browserHistory, store);

const muiTheme = getMuiTheme({});

let Root = ({}) => {
    return (
        <Provider store={store}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router history={history}>
                    <Route path="/" component={App}>
                        <Route path="home" component={Home}/>
                        <Route path="word" component={TextEditor}/>
                    </Route>
                    <Route path="*" component={Error404} />
                </Router>
            </MuiThemeProvider>
        </Provider>
    );
};

export default Root;