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
import {acProjectMember} from "/lib/actions/form";
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
                        <div 
                        className="col-md auto-width"
                        style={states.styles.chopList}
                        >
                            {states.membersList.map(handlers.renderChip, handlers)}
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
    const navReducer = state.navigationReducer;
    const formReducer = state.form.CreateProjectForm;
    return {
        states: {
            open: (navReducer.isDialog && 
                navReducer.openedDialog === 'CREATE_PROJECT'), 
            hintMembers: (( formReducer && formReducer.hintMembers ) ?
                formReducer.hintMembers : []),
            membersList: (( formReducer && formReducer.membersList ) ?
                formReducer.membersList : [
                    { key: 0, label: "dupa1"},
                    { key: 1, label: "dupa2"}
            ]),
            styles: {
                chip: {
                    margin:     4
                },
                chopList: {
                    display:    'flex',
                    flexWrap:   'wrap'
                }
            } 
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
                    dispatch(acProjectMember(value));
            },
            handleMemberDelete: ( key ) => {

            },
            renderChip: ( item ) => {
                return (
                    <Chip
                        key={item.key}
                        onRequestDelete={() => {
                            this.handleMemberDelete(item.key);
                        }}
                    >
                        {item.label}
                  </Chip>                    
                );
            }
        }
        
    }
};

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