import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import AppBar from "material-ui/AppBar";
import NavigationMenu from "/imports/ui/navigation/NavigationMenu";
import UnloggedRightMenu from "/imports/ui/navigation/UnloggedRightMenu";
import {handleLeftNav} from "/lib/actions/navigation";

const rightMenu = (
    <UnloggedRightMenu />
);

let NavigationTop = ({handlers}) => (
    <div>
        <AppBar
            title="ChemGit"
            onTouchTap={handlers.handleBarTouch}
            onLeftIconButtonTouchTap={handlers.handleNavigationMenuTouch}
            iconElementRight={rightMenu}
        >
            <NavigationMenu />
        </AppBar>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {
            handleNavigationMenuTouch: () => {
                dispatch(handleLeftNav());
            },
            handleBarTouch: () => {

            }
        }
    }
};

NavigationTop = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationTop);

export default NavigationTop;
