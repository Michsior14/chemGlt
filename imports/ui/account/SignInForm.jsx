import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class SignInForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          open: false,
          emailValue: "",
          pswValue:   ""  
        };
        this.handleOpen =           this.handleOpen.bind(this);
        this.handleClose =          this.handleClose.bind(this);
        this.handleLogging =        this.handleLogging.bind(this);
        this.handleEmailChange =    this.handleEmailChange.bind(this);
        this.handlePswChange =      this.handlePswChange.bind(this);
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
            open: false,
            emailValue: "",
            pswValue:   ""   
        });
    }

    handleEmailChange( eventObject ){
        this.setState({
            emailValue: eventObject.target.value
        });
    }
    
    handlePswChange( eventObject ){
        this.setState({
            pswValue: eventObject.target.value
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
                        value={this.emailValue}
                        onChange={this.handleEmailChange}
                    />
                    <br />
                    <TextField
                        hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                        value={this.pswValue}
                        onChange={this.handlePswChange}
                    />
                </Dialog>
            </div>
        );
    }
}


export default SignInForm;