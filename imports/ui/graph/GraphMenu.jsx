import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import graphActions from "/lib/actions/graph";
import { subscribeGraphs } from "/imports/helpers/subscribers";


const mapStateToProps = (state, ownProps) => {
    return {
		states: {
			graph: ownProps.graph
		}
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        handlers: {

        }
    }
}


let GraphMenu = ({states, handlers}) => {

	let rendered = (<h2>Rendering menu..</h2>);

	if ( states.graph ) {

		rendered = (
			<div>
				
			</div>
		);
	}

	return rendered;
}


GraphMenu = connect(
	mapStateToProps,
	mapDispatchToProps
)(GraphMenu);

export default GraphMenu;