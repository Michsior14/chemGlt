import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import {reduxForm, Field} from "redux-form";
import {TextField} from "redux-form-material-ui";
import {closeDialog} from "/lib/actions/account";
import {signIn} from "/lib/actions/account";
import {validateSignIn} from "/lib/validations";


let SignInForm = ({ 
    handleClose, 
    submitting,  
    open, 
    handleSubmit, 
    valid }) => {
    const actions = [
                (<FlatButton
                    label="Cancel"
                    primary
                    onTouchTap={handleClose}
                />),
                (<FlatButton
                    type="submit"
                    label="Login"
                    primary
                    keyboardFocused
                    form="loginForm"
                    disabled={!valid || submitting}
                />)
            ];
    return (
        <div>
            <Dialog
                title="Signing in"
                actions={actions}
                modal={false}
                open={open}
                onRequestClose={handleClose}
            >
                <form
                    id="loginForm"
                    onSubmit={handleSubmit}
                >
                    <div className="row between-xs">
                        <div className="col-md auto-width">
                            <Field
                                name="email"
                                component={TextField}
                                className="box auto-width"
                                hintText="E-mail"
                                floatingLabelText="E-mail"
                            />
                        </div>
                        <div className="col-md auto-width">
                            <Field
                                name="password"
                                component={TextField}
                                className="box auto-width"
                                hintText="Password"
                                floatingLabelText="Password"
                                type="password"
                            />
                        </div>
                    </div>
                </form>
            </Dialog>
        </div>
    );

};



const mapStateToProps = (state, ownProps) => {
    const reducer = state.accountReducer;
    return {
        open: (reducer.isDialog && reducer.openedDialog === 'SIGN_IN')
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClose: () => {
            dispatch(closeDialog());
        }
    }
};

SignInForm = reduxForm({
    form: 'SignInForm',
    onSubmit: (data, dispatch) => {
        dispatch(signIn(data));
    },
    validate: validateSignIn
})(SignInForm);

SignInForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInForm);

export default SignInForm;