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

let Home = ({handlers}) => {
    return (
        <div>
            <h2>Home Page of ChemGit</h2>
        </div>
    );
};


Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default Home;