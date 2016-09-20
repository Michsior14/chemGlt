import {Meteor} from "meteor/meteor";
import { LOCATION_CHANGE } from "react-router-redux";

import Projects from "/lib/collections/projects";


const graphReducer = ( state = getInitialState(), action ) => {
	switch( action.type ){
		case 'GRAPHS_ORDER_SUB':
			return Object.assign({}, state, {
				waiting: 			true,
				projectId: 			action.projectId
			});
		case 'GRAPHS_SUBSCRIBED':
			return Object.assign({}, state, {
				waiting: 			false,
				graphs: 			action.graphs,
				locals: 			action.locals
			});
		case 'UPDATE_GRAPHS_LIST':
			return Object.assign({}, state, {
				graphs: 			action.graphs,
				locals: 			action.locals
			});
		default:
			return state;
	}
};





const getInitialState = () => {

	return {
		waiting: 		false,
		projectId: 		null,
		graphs: 		[]
	}	
};




export default graphReducer;