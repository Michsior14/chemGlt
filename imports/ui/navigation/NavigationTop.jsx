import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import AppBar from "material-ui/AppBar";
import NavigationMenu from "/imports/ui/navigation/NavigationMenu";
import NavigationRightMenu from "/imports/ui/navigation/NavigationRightMenu";
import {handleLeftNav} from "/lib/actions/navigation";

const rightMenu = (
    <NavigationRightMenu />
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
	};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationTop);
