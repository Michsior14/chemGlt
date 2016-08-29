import React, {Component, PropTypes} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import NavigationTop from "/imports/ui/navigation/NavigationTop";
import "flexboxgrid/dist/flexboxgrid.css";
import { NotificationSystem } from 'react-notification-system';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import { closeLeftNav, openLeftNav } from "/lib/actions/account";
import Home from './Home';


const muiTheme = getMuiTheme({});

const mapStateToProps = (state, ownProps) => {

    return {
        openedLeft: {
            main: 'HOME',
            toggled: state.accountReducer.isLeftNav,
            classNames: state.accountReducer.isLeftNav ?
             "navigation-open" : "navigation-closed"
        }
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {
            tappedLeftNavHandle: ( toggled ) => {
                if( toggled ){
                    dispatch(closeLeftNav());
                }
                else{
                    dispatch(openLeftNav());
                }
            }
        }
    }
}
injectTapEventPlugin();


// App component - represents the whole app
let App = ({
    main,
    openedLeft,
    handlers
}) => {
    const mainComponent = (<Home/>)
    return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className={openedLeft.classNames}>
                    <NavigationTop tappedLeftNav={handlers.tappedLeftNavHandle}/>
                    {mainComponent}
                </div>
            </MuiThemeProvider> 
    );
}


App = connect(
    mapStateToProps, 
    mapDispatchToProps
)(App);

export default App;