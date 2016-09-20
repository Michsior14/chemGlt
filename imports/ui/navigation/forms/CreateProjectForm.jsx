import {Meteor} from "meteor/meteor";
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import AutoComplete from "material-ui/AutoComplete";
import Chip from "material-ui/Chip";
import {reduxForm, Field, FieldArray} from "redux-form";
import {TextField} from "redux-form-material-ui";
import {closeDialog} from "/lib/actions/navigation";
import {CreateProjectActions} from "/lib/actions/form";
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
    const renderMembers = ({ fields }) => {
        return (
            <div>
                <div className="row between-xs">
                    <div
                        className="col-md auto-width"
                        style={states.styles.chipList}
                        >
                        {fields.map((member, idx) =>
                            <Chip
                                key={idx}
                                onRequestDelete={() => {
                                    fields.remove(idx);
                                } }
                                >
                                {members}
                            </Chip>
                        ) }
                        <RaisedButton
                            label="Add"
                            style={states.styles.buttonAddMember}
                            onTouchTap={() => {
                                fields.push({
                                    username: states.addMemberField
                                });
                            } }
                            />

                    </div>
                </div>

            </div>
        );
    };
    const renderAutocomplete = (
        <div className="row between-xs">
            <div className="col-md auto-width">
                <AutoComplete
                    className="box auto-width"
                    hintText="Member"
                    searchText={states.addMemberField}
                    dataSource={states.hintMembers}
                    onUpdateInput={handlers.handleMemberAuto}
                    onNewRequest={handlers.handleMemberRequest}
                    />
            </div>
        </div>
    );

    // const chipList = states.membersList.map(( item ) => {
    //     return (
    //         <Chip
    //             name={"${item}.label"}
    //             key={item.key}
    //             onRequestDelete={() => {
    //                 handlers.handleMemberDelete(item.key);
    //             }}
    //         >
    //             {item.label}
    //       </Chip>                    
    //     );
    // });

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
                navReducer.openedDialog === "CREATE_PROJECT"),
            hintMembers: ((formReducer && formReducer.hintMembers) ?
                formReducer.hintMembers : []),
            membersList: ((formReducer && formReducer.membersList) ?
                formReducer.membersList : []),
            addMemberField: ((formReducer && formReducer.addMemberField) ?
                formReducer.addMemberField : ""),
            styles: {
                buttonAddMember: {
                    margin: 12
                },
                chip: {
                    margin: 4
                },
                chipList: {
                    display: "flex",
                    flexWrap: "wrap"
                }
            }
        }

    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {
            handleClose: () => {
                dispatch(closeDialog());
            },
            handleMemberAuto: (value) => {
                dispatch(CreateProjectActions.autocompleteMember(value));
            },
            handleMemberAdd: () => {
                dispatch(CreateProjectActions.addMember());
            },
            handleMemberDelete: (key) => {
                dispatch(CreateProjectActions.deleteMember(key));
            },
            handleMemberRequest: (value) => {
                dispatch(CreateProjectActions.updateMemberField(value));
            }

        }

    };
};

CreateProjectForm = reduxForm({
    form: "CreateProjectForm",
    onSubmit: (data, dispatch) => {
        dispatch(CreateProjectActions.createProject(data));
    },
    onSubmitSuccess: (result, dispatch) => {
        dispatch(closeDialog());
    },
    validate: validateCreateProject
})(CreateProjectForm);

CreateProjectForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateProjectForm);

export default CreateProjectForm;