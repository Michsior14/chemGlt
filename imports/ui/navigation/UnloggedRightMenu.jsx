import React, {Component, PropTypes} from "react";
import { connect } from 'react-redux';
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

import SignInForm from "/imports/ui/navigation/forms/SignInForm";

import { openSignInForm } from "/lib/actions/account";

const placeOrigin = {
	horizontal: 'right',
	vertical: 'top'
}

let UnloggedRightMenu = ({ placeOrigin, handlers }) => (
	<div>
	    <IconMenu
	        iconButtonElement={
	            <IconButton><MoreVertIcon /></IconButton>
	        }
	        targetOrigin={ placeOrigin }
	        anchorOrigin={ placeOrigin }
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
	    <SignInForm />
	</div>
);

const mapStateToProps = (state, ownProps) => {
	return {
		placeOrigin: placeOrigin
	};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handlers: {
			handleSignInTap: () => {
				dispatch(openSignInForm());
			},
			handleSignUpTap: () => {

			}
		}
	}
}

UnloggedRightMenu = connect(
	mapStateToProps,
	mapDispatchToProps
)(UnloggedRightMenu);

export default UnloggedRightMenu;