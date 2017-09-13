import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import { push as pushPath } from "react-router-redux";

import RaisedButton from "material-ui/RaisedButton";


let ProjectView = ({handlers, states, params}) => {
	return (
		<div>
			<h2>Project {params.projectId}</h2>
			<RaisedButton label="Graphs" onTouchTap={ () => {
				handlers.openView("/project/" + params.projectId + "/graph/list");
			} } />
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {

	return {
		states: {

		}
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handlers: {
			openView: (address) => {
				dispatch(pushPath(address));
			}
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectView);