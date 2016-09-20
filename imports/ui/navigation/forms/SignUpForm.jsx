import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import {reduxForm, Field} from "redux-form";
import {TextField} from "redux-form-material-ui";
import {closeDialog} from "/lib/actions/navigation";
import {signUp} from "/lib/actions/account";
import {validateSignUp} from "/lib/validations";


let SignUpForm = ({
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
            label="Submit"
            primary
            keyboardFocused
            form="signUpForm"
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
                    id="signUpForm"
                    onSubmit={handleSubmit}
                    >
                    <div className="row between-xs">
                        <div className="col-md auto-width">
                            <Field
                                name="username"
                                component={TextField}
                                className="box auto-width"
                                hintText="Username"
                                floatingLabelText="Username"
                                />
                        </div>
                    </div>
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
                    <div className="row between-xs">
                        <div className="col-md auto-width">
                            <Field
                                name="firstname"
                                component={TextField}
                                className="box auto-width"
                                hintText="Firstname"
                                floatingLabelText="Firstname"
                                />
                        </div>
                        <div className="col-md auto-width">
                            <Field
                                name="lastname"
                                component={TextField}
                                className="box auto-width"
                                hintText="Lastname"
                                floatingLabelText="Lastname"
                                />
                        </div>
                    </div>
                </form>
            </Dialog>
        </div>
    );

};

const mapStateToProps = (state, ownProps) => {
    const reducer = state.navigationReducer;
    return {
        open: (reducer.isDialog && reducer.openedDialog === "SIGN_UP")
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClose: () => {
            dispatch(closeDialog());
        }
    };
};

SignUpForm = reduxForm({
    form: "SignUpForm",
    onSubmit: (data, dispatch) => {
        const newUser = {
            username: data.username,
            email: data.email,
            password: data.password,
            profile: {
                name: {
                    first: data.firstname,
                    last: data.lastname
                }
            }
        };
        dispatch(signUp(data));
    },
    validate: validateSignUp
})(SignUpForm);

SignUpForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpForm);

export default SignUpForm;