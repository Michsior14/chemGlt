import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class SignInForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          open: false  
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogging = this.handleLogging.bind(this);
    }
    
    handleLogging(){
        this.handleClose();
    }
    
    handleOpen(){
        this.setState({
           open: true 
        });
    }
    
    handleClose(){
        this.setState({
           open: false 
        });
    }
    
    render() {
        const actions = [
            (<FlatButton
                label="Cancel"
                primary
                onTouchTap={this.handleClose} 
            />),
            (<FlatButton
                label="Login"
                primary
                keyboardFocused
                onTouchTap={this.handleLogging} 
            />)
        ];
        return (
            <div>
                <Dialog 
                    title="Signing in"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose} 
                >
                    <TextField
                        hintText="E-mail"
                        floatingLabelText="E-mail"
                        ref={ref => {
                            this.emailField = ref
                        }}
                    />
                    <br />
                    <TextField
                        hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                        ref={ref => {
                            this.passwordField = ref
                        }}
                    />
                </Dialog>
            </div>
        );
    }
}


export default SignInForm;