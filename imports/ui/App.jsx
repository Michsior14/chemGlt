import React, {Component, PropTypes} from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import NavigationTop from "/imports/ui/navigation/NavigationTop";
import "flexboxgrid/dist/flexboxgrid.css";
import {NotificationSystem} from "react-notification-system";
import {connect} from "react-redux";
import {handleLeftNav} from "/lib/actions/navigation";


const mapStateToProps = (state, ownProps) => {

    return {
        openedLeft: {
            main: 'HOME',
            toggled: state.navigationReducer.isLeftNav,
            classNames: state.navigationReducer.isLeftNav ?
                "navigation-open" : "navigation-closed"
        }
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {
            tappedLeftNavHandle: () => {
                dispatch(handleLeftNav());
            }
        }
    }
};


injectTapEventPlugin();
// App component - represents the whole app
let App = ({
    main,
    openedLeft,
    handlers,
    children
}) => {

    return (
        <div>
            <div className={openedLeft.classNames}>
                <NavigationTop tappedLeftNav={handlers.tappedLeftNavHandle}/>

            </div>
            {children}
        </div>
    );
};


App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;