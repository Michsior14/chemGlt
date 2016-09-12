import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";


const mapStateToProps = (state, ownProps) => {

    return {
        states: {

        }
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {

        }
    }
};

let ProjectView = ({handlers, states, projectId}) => {
    return (
        <div>
            <h2>Project {projectId}</h2>
        </div>
    );
};


ProjectView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectView);

export default ProjectView;