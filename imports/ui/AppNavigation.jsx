import React, { Component, PropTypes } from 'react';
import { AppBar, FlatButton, IconButton, IconMenu, MenuItem } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import SignInForm from './account/SignInForm';


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
    constructor(props){
        super(props);
        this.handleSignInTap = this.handleSignInTap.bind(this);
    }
    
    handleBarTouchTap() {
        
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
                            onTouchTap={this.handleSignInTap} ></MenuItem>
                        <MenuItem 
                            primaryText="Sign up"
                            onTouchTap={this.handleSignUpTap} ></MenuItem>
                        </IconMenu>           
                    }
                >
                    <SignInForm ref={ref => { this.signInForm = ref; }} />
                </AppBar>
            </div>
        );
    }
}

AppNavigation.propTypes = propTypes;
    
AppNavigation.defaultProps = defaultProps;

export default AppNavigation;
