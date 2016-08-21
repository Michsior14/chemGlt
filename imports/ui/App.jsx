import React, { Component, PropTypes } from 'react';
import { AppBar, FlatButton, IconButton, IconMenu, MenuItem } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MaterialUIHelper from './helpers/MaterialUIHelper';


// App component - represents the whole app
export default class App extends Component {
    constructor(props){
        MaterialUIHelper.configure(App);
        super(props);
    }
    
    handleBarTouchTap() {
        
    }
    
    handleSignInTap() {
        alert("Signing in");
    }
    
    handleSignUpTap() {
        alert("Signing up");
    }
    
    getChildContext() {
        return { muiTheme: MaterialUIHelper.getBaseTheme()};
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
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}} >
                        <MenuItem 
                            primaryText="Sign in"
                            onTouchTap={this.handleSignInTap} ></MenuItem>
                        <MenuItem 
                            primaryText="Sign up"
                            onTouchTap={this.handleSignUpTap} ></MenuItem>
                        </IconMenu>             
                    }
                    />
                    {this.props.main}
            </div>
        );
    }
}

App.propTypes = {
        styles: PropTypes.object.isRequired,
        main: PropTypes.object.isRequired
};
    
App.defaultProps = {
    styles: {
        title: {
            cursor: 'pointer'
        }
    }
};
