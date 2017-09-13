import React, {Component, PropTypes} from "react";
import { connect } from "react-redux";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import SignInForm from "/imports/ui/navigation/forms/SignInForm";
import SignUpForm from "/imports/ui/navigation/forms/SignUpForm";
import CreateProjectForm from "/imports/ui/navigation/forms/CreateProjectForm";
import { openDialog } from "/lib/actions/navigation";
import { logOut } from "/lib/actions/account";

const placeOrigin = {
	horizontal: "right",
	vertical: "top"
};

const mapStateToProps = (state, ownProps) => {
	return {
		states: {
			isLoggedIn: state.accountReducer.isLoggedIn,
			placeOrigin: placeOrigin
		}

	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handlers: {
			handleSignInTap: () => {
				dispatch(openDialog("SIGN_IN"));
			},
			handleSignUpTap: () => {
				dispatch(openDialog("SIGN_UP"));
			},
			handleLogOut: () => {
				dispatch(logOut());
			}
		}
	};
};

let NavigationRightMenu = ({ states, handlers }) => {
	let menuList = null;
	const iconButton = (<IconButton><MoreVertIcon /></IconButton>);
	if (states.isLoggedIn) {
		menuList = (
			<IconMenu
				iconButtonElement={iconButton}
				targetOrigin={ states.placeOrigin }
				anchorOrigin={ states.placeOrigin }
				>
				<MenuItem
					primaryText="Settings"
					/>
				<MenuItem
					primaryText="Log Out"
					onTouchTap={handlers.handleLogOut}
					/>
			</IconMenu>

		);
	}
	else {
		menuList = (
			<IconMenu
				iconButtonElement={iconButton}
				targetOrigin={ states.placeOrigin }
				anchorOrigin={ states.placeOrigin }
				>
				<MenuItem
					primaryText="Sign in"
					onTouchTap={handlers.handleSignInTap}
					/>
				<MenuItem
					primaryText="Sign up"
					onTouchTap={handlers.handleSignUpTap}
					/>
			</IconMenu>
		);
	}

	return (
		<div>
			{menuList}
			<SignInForm />
			<SignUpForm />
			<CreateProjectForm />
		</div>
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavigationRightMenu);
