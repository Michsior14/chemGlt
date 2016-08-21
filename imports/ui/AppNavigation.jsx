import React, {Component, PropTypes} from "react";
import AppBar from "material-ui/AppBar";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import SignInForm from "./account/SignInForm";
import NavigationMenu from "./NavigationMenu";

const propTypes = {
    styles: PropTypes.object.isRequired
};

const defaultProps = {
    styles: {
        title: {
            cursor: 'pointer'
        }
    }
};


class AppNavigation extends Component {
    constructor(props) {
        super(props);
        this.handleSignInTap = this.handleSignInTap.bind(this);
        this.handleNavigationMenuTap = this.handleNavigationMenuTap.bind(this);
    }

    handleBarTouchTap() {

    }

    handleNavigationMenuTap() {
        this.navigationMenu.handleToggle();
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
                <AppBar
                    title={<span style={this.props.styles.title}>ChemGit</span>}
                    onTouchTap={this.handleBarTouchTap}
                    onLeftIconButtonTouchTap={this.handleNavigationMenuTap}
                    iconElementRight={
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
                    }
                >
                    <SignInForm ref={ref => {
                        this.signInForm = ref;
                    }}
                    />
                    <NavigationMenu ref={ref => {
                        this.navigationMenu = ref;
                    }}
                    />
                </AppBar>
            </div>
        );
    }
}

AppNavigation.propTypes = propTypes;

AppNavigation.defaultProps = defaultProps;

export default AppNavigation;
