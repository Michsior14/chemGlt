import React, {Component, PropTypes} from "react";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

import SignInForm from "/imports/ui/navigation/forms/SignInForm";


class UnloggedRightMenu extends Component {
    constructor(props) {
        super(props);
        this.handleSignInTap = this.handleSignInTap.bind(this);
        this.handleSignUpTap = this.handleSignUpTap.bind(this);
    }

    handleSignInTap() {
        this.signInForm.handleOpen();
    }

    handleSignUpTap() {
        alert("Signing up");
    }

	render() {
		return (
			<div>
			    <IconMenu
			        iconButtonElement={
			            <IconButton><MoreVertIcon /></IconButton>
			        }
			        targetOrigin={{horizontal: 'right', vertical: 'top'}}
			        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
			    >
			        <MenuItem
			            primaryText="Sign in"
			            onTouchTap={this.handleSignInTap}
			        />
			        <MenuItem
			            primaryText="Sign up"
			            onTouchTap={this.handleSignUpTap}
			        />
			    </IconMenu>
			    <SignInForm ref={ref => {
                        this.signInForm = ref;
                    }}
                />
			</div>
		);
	}

}

export default UnloggedRightMenu;