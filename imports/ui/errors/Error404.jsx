import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";


const mapStateToProps = (state, ownProps) => {

    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {}
    }
};

let Error404 = ({handlers}) => {
    return (
        <div>
            <h2>Requested Page has not been found</h2>
        </div>
    );
};


Error404 = connect(
    mapStateToProps,
    mapDispatchToProps
)(Error404);

export default Error404;