import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";

import graphActions from "/lib/actions/graph";
import { subscribeGraphs } from "/imports/helpers/subscribers";


const mapStateToProps = (state, ownProps) => {
	return {
		states: {
			local: ownProps.local
		}
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handlers: {
			handleMenuExpand: ( idx ) => {
				let local = ownProps.local;
				local.datasets[idx].menu.expanded = !local.datasets[idx].menu.expanded;
				dispatch(graphActions.refreshLocal(local));
			}
		}
	};
};


let GraphMenu = ({states, handlers}) => {

	let rendered = (<h2>Rendering menu..</h2>);

	if ( states.local ) {
		const menu = states.local.datasets.map(( item, idx ) => {
			// console.log(item);
			return (
				<div key={(idx.toString() + item.label + "menu")}>
					<Card expanded={item.menu.expanded} onExpandChange={() => {
						handlers.handleMenuExpand(idx);
					}}> 
						<CardHeader title={item.label} actAsExpander showExpandableButton />
					</Card>
					<br/>
				</div>
			);
		});
		rendered = (
			<div>
				{menu}
			</div>
		);
	}

	return rendered;
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GraphMenu);