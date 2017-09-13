import {Meteor} from "meteor/meteor";
import { LOCATION_CHANGE } from "react-router-redux";

import Projects from "/lib/collections/projects";


const graphReducer = (state = getInitialState(), action) => {
	switch (action.type) {
		case "GRAPHS_ORDER_SUB":
			return Object.assign({}, state, {
				waiting: true,
				projectId: action.projectId
			});
		case "GRAPHS_SUBSCRIBED":
			return Object.assign({}, state, {
				waiting: false,
				graphs: action.graphs,
				locals: action.locals
			});
		case "UPDATE_GRAPHS_LIST":
			return Object.assign({}, state, {
				graphs: action.graphs,
				locals: action.locals
			});
		case "GRAPHS_REFRESH_LOCAL": {
			const locals = state.locals.map((local) => {
				if (local._id === action.local._id) {
					return action.local;
				}
				return local;
			});
			return Object.assign({}, state, {
				locals: locals
			});
		}
		default:
			return state;
	}
};

const getInitialState = () => {
	return {
		waiting: false,
		projectId: null,
		graphs: [],
		locals:	[],
		options: {
			fitting: {
				type: ["POLYNOMIAL", "LOGARITHMIC", "POWER"],
				degree: [1, 2, 3, 4]
			}
		}
	};
};




export default graphReducer;