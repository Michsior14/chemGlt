import React, {Component, PropTypes} from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Loader from "react-loader";
import NavigationTop from "/imports/ui/navigation/NavigationTop";
import "flexboxgrid/dist/flexboxgrid.css";
import {NotificationSystem} from "react-notification-system";
import {connect} from "react-redux";
import {handleLeftNav} from "/lib/actions/navigation";

import { subscribeProjects } from "/imports/helpers/subscribers";
import { finishStartup } from "/lib/actions/navigation";


const mapStateToProps = (state, ownProps) => {
    return {
        states: {
            isStartup: state.navigationReducer.isStartup,
            isLoaded: !(
                state.navigationReducer.isStartup ||
                state.graphReducer.waiting ||
                state.projectsReducer.waiting ||
                state.accountReducer.waiting
            ),
            openedLeft: {
                main: "HOME",
                toggled: state.navigationReducer.isLeftNav,
                classNames: state.navigationReducer.isLeftNav ?
                    "navigation-open" : "navigation-closed"
            }
        }

    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {
            tappedLeftNavHandle: () => {
                dispatch(handleLeftNav());
            },
            startup: () => {
                subscribeProjects(dispatch);
                dispatch(finishStartup());
            }
        }
    };
};


injectTapEventPlugin();
// App component - represents the whole app
let App = ({
    main,
    states,
    handlers,
    children
}) => {

    if (states.isStartup) {
        handlers.startup();
    }

    return (
        <Loader loaded={states.isLoaded} scale={3} >
            <div className={states.openedLeft.classNames}>
                <NavigationTop tappedLeftNav={handlers.tappedLeftNavHandle}/>
                {children}
            </div>
        </Loader>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);