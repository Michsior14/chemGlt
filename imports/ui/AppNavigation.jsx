import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SignInForm from './account/SignInForm';


export default class AppNavigation extends Component {
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
                    }>
                    <SignInForm ref={ref => { this.signInForm = ref; }} />
                </AppBar>
            </div>
        );
    }
}

AppNavigation.propTypes = {
        styles: PropTypes.object.isRequired
};
    
AppNavigation.defaultProps = {
    styles: {
        title: {
            cursor: 'pointer'
        }
    }
};
