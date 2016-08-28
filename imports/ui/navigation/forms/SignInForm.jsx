import React, {Component, PropTypes} from "react";
import { connect } from 'react-redux';
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FormsyText from "formsy-material-ui/lib/FormsyText";
import validations from "/lib/validations";
import messages from "/lib/messages";

import { signIn, closeDialog, updateSignInFields } from "../../../../lib/actions/account";


class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // open: false,
            emailValue: "",
            pswValue: "",
            canSubmit: false,
        };
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
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
                primary
                keyboardFocused
                form="loginForm"
            />)
        ];
        return (
            <div>
                <Dialog
                    title="Signing in"
                    actions={actions}
                    modal={false}
                    open={this.props.open}
                    onRequestClose={this.props.handleClose}
                >
                    <Formsy.Form
                        id="loginForm"
                        onSubmit={() => {
                            this.props.handleLogging(
                                this.props.emailValue,
                                this.props.pswValue
                            );
                        }}
                    >
                        <div className="row between-xs">
                            <div className="col-md auto-width">
                                <FormsyText
                                    name="email"
                                    className="box auto-width"
                                    hintText="E-mail"
                                    floatingLabelText="E-mail"
                                    value={this.props.emailValue}
                                    onChange={
                                        (eventObject) => {
                                            this.props.handleEmailChange(eventObject, this.props.pswValue)
                                        }
                                    }
                                />
                            </div>
                            <div className="col-md auto-width">
                                <FormsyText
                                    name="password"
                                    className="box auto-width"
                                    hintText="Password"
                                    floatingLabelText="Password"
                                    type="password"
                                    value={this.props.pswValue}
                                    onChange={
                                        (eventObject) => {
                                            this.props.handlePswChange(eventObject, this.props.emailValue)
                                        }
                                    }
                                />
                            </div>
                        </div>
                    </Formsy.Form>
                </Dialog>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const reducer = state.accountReducer;
    return {
        open:       (reducer.isDialog && reducer.openedDialog === 'SIGN_IN'),
        emailValue: reducer.isDialog ? reducer.fieldsDialog.email : null,
        pswValue:   reducer.isDialog ? reducer.fieldsDialog.password : null
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClose: () => {
            dispatch(closeDialog());
        },
        handleEmailChange: ( eventObject, password ) => {
            dispatch(updateSignInFields({
                email:      eventObject.target.value,
                password:   password
            }));
        },
        handlePswChange: ( eventObject, email ) => {
            dispatch(updateSignInFields({
                email:      email,
                password:   eventObject.target.value
            }));
        },
        handleLogging: (email, password) => {
            console.log(email);
            console.log(password);
        }
    }
}

SignInForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInForm);

export default SignInForm;