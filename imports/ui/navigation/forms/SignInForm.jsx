import React, {Component, PropTypes} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FormsyText from "formsy-material-ui/lib/FormsyText";

const errorMessages = {
    loginError: {
        isEmail: "Provide valid email"
    },
    passwordError: {
        minLength: "Password requires min. 6 characters",
        isValidPassword: "Password not valid"
    }
};

const validations = {
    login: {
        isEmail: true,
    },
    password: {
        minLength: 6,
        isValidPassword: function (values, value) {
            return true;
        }
    }
}

class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            emailValue: "",
            pswValue: "",
            canSubmit: false,
        };
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogging = this.handleLogging.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePswChange = this.handlePswChange.bind(this);
    }

    enableButton() {
        this.setState({
            canSubmit: true,
        });
    }

    disableButton() {
        this.setState({
            canSubmit: false,
        });
    }

    handleLogging() {
        this.handleClose();
    }

    handleOpen() {
        this.setState({
            open: true
        });
    }

    handleClose() {
        this.setState({
            open: false,
            emailValue: "",
            pswValue: ""
        });
    }

    handleEmailChange(eventObject) {
        this.setState({
            emailValue: eventObject.target.value
        });
    }

    handlePswChange(eventObject) {
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
                type="submit"
                label="Login"
                disabled={!this.state.canSubmit}
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
                    <Formsy.Form
                        onValid={this.enableButton}
                        onInvalid={this.disableButton}
                    >
                        <div className="row between-xs">
                            <div className="col-md auto-width">
                                <FormsyText
                                    name="email"
                                    className="box auto-width"
                                    hintText="E-mail"
                                    floatingLabelText="E-mail"
                                    required
                                    validations={validations.login}
                                    validationErrors={errorMessages.loginError}
                                    value={this.state.emailValue}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                            <div className="col-md auto-width">
                                <FormsyText
                                    name="password"
                                    className="box auto-width"
                                    hintText="Password"
                                    floatingLabelText="Password"
                                    type="password"
                                    required
                                    validations={validations.password}
                                    validationErrors={errorMessages.passwordError}
                                    value={this.state.pswValue}
                                    onChange={this.handlePswChange}
                                />
                            </div>
                        </div>
                    </Formsy.Form>
                </Dialog>
            </div>
        );
    }
}


export default SignInForm;