import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import graphActions from "/lib/actions/graph";
import { subscribeGraphs } from "/imports/helpers/subscribers";


const mapStateToProps = (state, ownProps) => {
    return {
		states: {
			local: ownProps.local,
			options: state.graphReducer.options
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
			},
			handleTypeFitChange: ( idx, value ) => {
				let local = ownProps.local;
				local.datasets[idx].fitting.type = value;
				dispatch(graphActions.refreshLocal(local));
			},
			handleDegreeFitChange: ( idx, value ) => {
				let local = ownProps.local;
				local.datasets[idx].fitting.degree = value;
				dispatch(graphActions.refreshLocal(local));
			}			
        }
    }
}


let GraphMenu = ({states, handlers}) => {

	let rendered = (<h2>Rendering menu..</h2>);
	const optionsFitting = states.options.fitting;
	if ( states.local ) {
		const menu = states.local.datasets.map(( item, idx ) => {
			// console.log(item);
			const localFitting = item.fitting;
			const typesFitting = optionsFitting.type.map(( typeOption, idxOption ) => {
				return (
					<MenuItem 
						key={(idx.toString() + item.label + idxOption.toString() + typeOption + "typeFit")} 
						value={typeOption} 
						primaryText={typeOption} 
					/>
				);
			});
			const degreesFitting = optionsFitting.degree.map(( degreeOption, idxOption ) => {
				return (
					<MenuItem 
						key={(idx.toString() + item.label + idxOption.toString() + degreeOption + "degreesFit")} 
						value={degreeOption} 
						primaryText={degreeOption} 
					/>
				);
			});
			return (
				<div key={(idx.toString() + item.label + "menu")}>
					<Card expanded={item.menu.expanded} onExpandChange={() => {
						handlers.handleMenuExpand(idx);
					}}> 
						<CardHeader title={item.label} actAsExpander showExpandableButton />
						<CardTitle title="Fitting" expandable />
						<CardText expandable >
							<DropDownMenu
								onChange={( eventType, idxType, valueType ) => {
									handlers.handleTypeFitChange(idx, valueType);
								}}
								value={localFitting.type}
							>
								{typesFitting}
							</DropDownMenu>
							<DropDownMenu
								onChange={( eventType, idxType, valueDegree ) => {
									handlers.handleDegreeFitChange(idx, valueDegree);
								}}
								value={localFitting.degree}
							>
								{degreesFitting}
							</DropDownMenu>
						</CardText>
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
}


GraphMenu = connect(
	mapStateToProps,
	mapDispatchToProps
)(GraphMenu);

export default GraphMenu;