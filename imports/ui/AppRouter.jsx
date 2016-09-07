import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';

import Home from '/imports/ui/Home';

const mapStateToProps = (state, ownProps) => {

    return {

    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {

        }
    }
}

let  AppRouter = ({ handlers }) => {
	return (
		<div>
			<Router history={browserHistory} >
				<Route path="/" component={Home} />
			</Router>
		</div>
	);
}


 AppRouter = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppRouter);

export default AppRouter;