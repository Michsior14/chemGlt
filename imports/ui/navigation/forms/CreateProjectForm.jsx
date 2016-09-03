import {Meteor} from "meteor/meteor";
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';
import {reduxForm, Field} from "redux-form";
import {TextField} from "redux-form-material-ui";
import {closeDialog} from "/lib/actions/navigation";
import {signUp} from "/lib/actions/account";
import {validateCreateProject} from "/lib/validations";


let CreateProjectForm = ({ 
    handlers, 
    states,
    submitting,  
    handleSubmit, 
    valid }) => {
    const actions = [
        (<FlatButton
            label="Cancel"
            primary
            onTouchTap={handlers.handleClose}
        />),
        (<FlatButton
            type="submit"
            label="Create"
            primary
            keyboardFocused
            form="createProjectForm"
            disabled={!valid || submitting}
        />)
    ];
    return (
        <div>
            <Dialog
                title="Creating Project"
                actions={actions}
                modal={false}
                open={states.open}
                onRequestClose={handlers.handleClose}
            >
                <form
                    id="createProjectForm"
                    onSubmit={handleSubmit}
                >
                    <div className="row between-xs">
                        <div className="col-md auto-width">
                            <Field
                                name="name"
                                component={TextField}
                                className="box auto-width"
                                hintText="Name"
                                floatingLabelText="Name of project"
                            />
                        </div>
                    </div>  
                    <div className="row between-xs">
                        <div className="col-md auto-width">
                            <AutoComplete
                                className="box auto-width"
                                hintText="Member"
                                dataSource={states.hintMembers}
                                onUpdateInput={handlers.handleAutoMembers}
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
        states: {
            open: (reducer.isDialog && 
                reducer.openedDialog === 'CREATE_PROJECT'),  
            hintMembers: hintMembers
        }
        
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {
            handleClose: () => {
                dispatch(closeDialog());
            },
            handleAutoMembers: ( value ) => {
                if( value.length > 2){
                    console.log(value);
                    const usersList = Meteor.users.find({
                        username: { $regex: value }                            
                    }).fetch();
                    console.log(ownProps);
                    hintMembers = [];
                    console.log(usersList);
                    for(let user of usersList){
                        console.log("Pushing: ");
                        console.log(user.username);
                        hintMembers.push(user.username);
                    }
                }

            }   
        }
        
    }
};

let hintMembers = [];

CreateProjectForm = reduxForm({
    form: 'CreateProjectForm',
    onSubmit: (data, dispatch) => {

    },
    validate: validateCreateProject
})(CreateProjectForm);

CreateProjectForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateProjectForm);

export default CreateProjectForm;